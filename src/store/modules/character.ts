import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';

import store from '@/store';
import { Hero, HeroType } from '@/types';
import PeerStore from './peer';

@Module({
  name: 'character',
  dynamic: true,
  store,
})
export default class CharacterStore extends VuexModule {
  barbarian: Hero = new Hero('barbarian', { fineSword: true, leatherArmor: true });
  dwarf: Hero = new Hero('dwarf', { hatchet: true, leatherArmor: true, toolset: true });
  elf: Hero = new Hero('elf', { shortSword: true, leatherArmor: true });
  wizard: Hero = new Hero('wizard', { daguer: true, leatherArmor: true });

  @Action
  async updateHero({id, data}: {id: HeroType; data: Partial<Hero>}) {
    await this.SET_HERO({
      ...this[id],
      ...data,
      id,
    });

    await getModule(PeerStore).synchronize();
  }

  @Mutation
  private async SET_HERO(hero: Hero) {
    this[hero.id] = hero;
  }
}
