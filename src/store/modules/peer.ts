import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import Peer from 'peerjs';

import store from '@/store';
import { Hero, HeroType, isHeroType } from '@/types';
import CharacterStore from './character';

export type PlayerRole = HeroType | 'guest';

const STORAGE_ROLE_KEY = 'peer_role';
const peerIdPrefix = 'heroquest-2019-';

export function roleToPeerId(role: PlayerRole): string {
  return `${peerIdPrefix}${role}`;
}

export function peerIdToRole(id: string): PlayerRole {
  const assumedRole = id.substr(peerIdPrefix.length);

  return isHeroType(assumedRole) ? assumedRole : 'guest';
}

interface ConnectionDescription {
  role: PlayerRole;
  connection: Peer.DataConnection;
}

interface SyncMessage {
  hero: HeroType;
  sheet: Partial<Hero>;
}

function isObject(item: unknown): item is Record<string, unknown> {
  return typeof item === 'object' && item !== null;
}

function isSyncMessage(message: unknown): message is SyncMessage {
  return isObject(message) && Object.keys(message) === ['hero', 'sheet'];
}

const retryHandlers: number[] = [];

function clearHandlers() {
  while(retryHandlers.length) {
    clearTimeout(retryHandlers.shift());
  }
}

let peer: Peer | null;

@Module({
  name: 'peer',
  dynamic: true,
  store,
})
export default class PeerStore extends VuexModule {
  id = '';
  status: 'online' | 'offline' = 'offline';
  connections: ConnectionDescription[] = [];

  @Action({ rawError: true })
  async open({
    role = localStorage.getItem(STORAGE_ROLE_KEY) as PlayerRole || 'guest',
    id = roleToPeerId(role)
  }: { role?: PlayerRole; id?: string }) {
    clearHandlers();
    await this.close();

    console.debug('opening', role, id);
    peer = new Peer(id, { secure: false });

    peer.on('open', () => {
      console.debug('opened', id);
      this.SET_PEER_ID(id);
      this.SET_STATUS('online');

      const characters: HeroType[] = (['barbarian', 'dwarf', 'elf', 'wizard'] as HeroType[]);

      if (isHeroType(role)) {
        characters.splice(characters.indexOf(role), 1);
      }

      characters.forEach((heroType: HeroType) => this.connect({ role: heroType }));
    });

    peer.on('connection', (connection) => {
      this.setupConnection({ role: peerIdToRole(connection.peer), connection });
    });

    peer.on('error', async ({ type, message }) => {
      if (type === 'peer-unavailable') {
        if (role === 'guest') {
          // Unable to connect to another peer. Only retry to connect if role is guest because this peer will identify itself upon creation.
          retryHandlers.push(setTimeout(() => {
            this.connect({ role: peerIdToRole(message.substr(message.lastIndexOf(' ') + 1)) });
          }, 1000));
        }

        return;
      } else if (['disconnected', 'webrtc'].indexOf(type) > -1) {
        // Non fatal error
        return;
      }

      console.debug(type, `error on peer (${message}) - closing...'`);
      await this.close();

      if (type === 'unavailable-id') {
        retryHandlers.push(setTimeout(() => {
          if (isHeroType(role)) {
            this.open({ role: 'guest' });
          } else {
            this.open({ role: 'guest', id: `guest-${~~(Math.random() * 1000)}` });
          }
        }, 500));
      } else {
        retryHandlers.push(setTimeout(() => {
          this.open({ role });
        }, 1000));
      }
    });
  }

  @Action({ rawError: true })
  async connect({ role, id = roleToPeerId(role) }: { role: PlayerRole; id?: string }) {
    const connection = peer?.connect(id, { label: role });

    connection?.on('open', () => {
      this.setupConnection({ role, connection });
    });

    connection?.on('close', () => {
      console.log('connection closed', role);
    });

    connection?.on('error', (error) => {
      console.log('error on connection', role, error);
    });
  }

  @Action({ rawError: true })
  async setupConnection({ role, connection }: { role: PlayerRole; connection: Peer.DataConnection }) {
    connection.on('open', () => {
      this.synchronize(connection);
    });

    connection.on('data', (message: unknown) => {
      console.debug('data received', role, message);
      if (isSyncMessage(message)) {
        getModule(CharacterStore).updateHero({ id: message.hero, data: message.sheet });
      }
    });

    this.ADD_CONNECTION({ role, connection });
  }

  @Action({ rawError: true })
  async synchronize(connection?: Peer.DataConnection) {
    const role: PlayerRole = peerIdToRole(this.id);

    if (!isHeroType(role)) {
      return;
    }

    const message: SyncMessage = {
      hero: role,
      sheet: getModule(CharacterStore)[role],
    };

    const connections: Peer.DataConnection[] = [];

    if (connection) {
      connections.push(connection);
    } else {
      connections.push(...this.connections.map(({ connection }: ConnectionDescription) => connection));
    }

    connections.forEach((connection: Peer.DataConnection) => connection.send(message));
  }

  @Action({ rawError: true })
  async close() {
    peer?.destroy();
    peer = null;
    this.SET_PEER_ID('');
    this.SET_STATUS('offline');
  }

  @Mutation
  private SET_PEER_ID(id: string) {
    localStorage.setItem(STORAGE_ROLE_KEY, peerIdToRole(id));
    this.id = id;
  }

  @Mutation
  private SET_STATUS(status: 'online' | 'offline') {
    this.status = status;
  }

  @Mutation
  private ADD_CONNECTION(description: ConnectionDescription) {
    this.connections.push(description);
  }
}
