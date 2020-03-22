import Vue from 'vue'
import Vuex from 'vuex'

import { HeroEnum, Hero } from "@/types"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barbarian: new Hero(HeroEnum.barbarian),
    dwarf: new Hero(HeroEnum.dwarf),
    elf: new Hero(HeroEnum.elf),
    wizard: new Hero(HeroEnum.wizard),

    selectedHero: '',
    playedHero: '',
  },
  mutations: {
    setPlayedHero(state, name: HeroEnum) {
      state.playedHero = name;
    },

    setSelectedHero(state, name: HeroEnum) {
      state.selectedHero = name;
    },

    update(state, hero: Hero) {
      state[hero.name] = hero;
    },
  },
  actions: {
    update({ commit }, hero: Hero) {
      commit('update', hero);
    }
  },
})
