import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { Hero, Sheet } from "@/types";
import { State } from "vuex-class";

export type State = {
  player: string;
  sheets: {
    [hero in Hero]: Sheet;
  };
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state(): State {
    return {
      player: localStorage.getItem("player") || "",

      sheets: {
        barbarian: new Sheet("barbarian", {
          fineSword: true,
          leatherArmor: true
        }),
        dwarf: new Sheet("dwarf", {
          hatchet: true,
          leatherArmor: true,
          toolset: true
        }),
        elf: new Sheet("elf", { shortSword: true, leatherArmor: true }),
        wizard: new Sheet("wizard", { daguer: true, leatherArmor: true })
      }
    };
  },

  actions: {
    async playAs({ commit }, name: string) {
      localStorage.setItem("player", name);
      commit("SET_PLAYER", name);
    },

    async updateSheet(
      { state, commit },
      sheet: { hero: Hero } & Partial<Sheet>
    ) {
      commit("SET_SHEET", {
        ...state.sheets[sheet.hero],
        ...sheet
      });
    }
  },

  mutations: {
    SET_PLAYER(state, name: string) {
      state.player = name;
    },

    SET_SHEET(state, sheet: Sheet) {
      state.sheets[sheet.hero] = sheet;
    }
  }
});

export function useStore(): Store<State> {
  return baseUseStore<State>(key);
}
