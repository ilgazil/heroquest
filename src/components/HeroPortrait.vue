<template>
  <div class="relative">
    <img :src="src" :alt="hero" :class="{ faded: !isHighlighted }" />

    <div
      class="absolute bottom-0 right-0 mb-4 mr-4 w-6 h-6 rounded-full"
      :class="[isOnline ? 'bg-green-700' : 'bg-red-700']"
    >
      <svg
        v-if="player === sheet.player"
        class="m-auto mt-1 text-white w-4 h-4"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.97,16L5,19C4.67,19.3 4.23,19.5 3.75,19.5A1.75,1.75 0 0,1 2,17.75V17.5L3,10.12C3.21,7.81 5.14,6 7.5,6H16.5C18.86,6 20.79,7.81 21,10.12L22,17.5V17.75A1.75,1.75 0 0,1 20.25,19.5C19.77,19.5 19.33,19.3 19,19L16.03,16H7.97M7,8V10H5V11H7V13H8V11H10V10H8V8H7M16.5,8A0.75,0.75 0 0,0 15.75,8.75A0.75,0.75 0 0,0 16.5,9.5A0.75,0.75 0 0,0 17.25,8.75A0.75,0.75 0 0,0 16.5,8M14.75,9.75A0.75,0.75 0 0,0 14,10.5A0.75,0.75 0 0,0 14.75,11.25A0.75,0.75 0 0,0 15.5,10.5A0.75,0.75 0 0,0 14.75,9.75M18.25,9.75A0.75,0.75 0 0,0 17.5,10.5A0.75,0.75 0 0,0 18.25,11.25A0.75,0.75 0 0,0 19,10.5A0.75,0.75 0 0,0 18.25,9.75M16.5,11.5A0.75,0.75 0 0,0 15.75,12.25A0.75,0.75 0 0,0 16.5,13A0.75,0.75 0 0,0 17.25,12.25A0.75,0.75 0 0,0 16.5,11.5Z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { State } from "vuex-class";
import { websocket } from "@/shared/websocket";
import { Hero, Sheet } from "@/types";

@Options({
  props: {
    hero: String as PropType<Hero>,
  },
})
export default class HeroPortrait extends Vue {
  hero!: Hero;

  @State("player") player!: string;
  @State("sheets") sheets!: { [hero in Hero]: Sheet };

  get src(): string {
    return require(`@/assets/img/${this.hero}.png`);
  }

  get sheet(): Sheet {
    return this.sheets[this.hero] as Sheet;
  }

  get isHighlighted(): boolean {
    return !this.$route.params?.hero || this.hero === this.$route.params.hero;
  }

  get isOnline(): boolean {
    return (
      this.player === this.sheet.player || websocket.hasConnection(this.hero)
    );
  }
}
</script>

<style scoped lang="scss">
img.faded {
  opacity: 0.5;
}
</style>
