<template>
  <CharacterSheet :sheet="sheet" />
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { State } from "vuex-class";
import CharacterSheet from "@/components/CharacterSheet.vue";
import { Hero, Sheet } from "@/types";

@Options({
  components: {
    CharacterSheet,
  },

  props: {
    hero: {
      type: String as PropType<Hero>,
      required: true,
    },
  },
})
export default class HeroComponent extends Vue {
  readonly hero!: Hero;

  @State("sheets") sheets!: { [hero in Hero]: Sheet };

  get sheet(): Sheet {
    return this.sheets[this.hero];
  }
}
</script>
