import Vue from 'vue';
import Vuex from 'vuex';

import CharacterStore from '@/store/modules/character';

Vue.use(Vuex);

interface StoreType {
  character: CharacterStore;
}

const store = new Vuex.Store<StoreType>({});

export default store;
