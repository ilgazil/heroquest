import Vue from 'vue'
import Vuex from 'vuex'

import { Character } from "@/types"

Vue.use(Vuex)

const chars: Character[] = [];

export default new Vuex.Store({
  state: {
    selectedCharacter: '',
    chars,
  },
  mutations: {
    setSelectedCharacter(state, payload) {
      state.selectedCharacter = payload;
    },

    updateChar(state, payload) {
      const char = state.chars.find((char) => char.id === payload.id);

      if (char) {
        // save
      }
    },
  },
  actions: {
    updateChar({ commit }, payload) {
      commit('updateChar', payload);
    }
  },
})
