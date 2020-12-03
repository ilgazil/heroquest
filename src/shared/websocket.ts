import { HeroType } from '@/types';

export const websocket = {
  status: 'open',

  hasConnection(role: HeroType): boolean {
    return false;
  }
};
