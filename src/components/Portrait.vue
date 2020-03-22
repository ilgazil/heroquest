<template>
  <img :src="src" :alt="hero" :class="{ faded: hero !== selectedHero }" />
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  import { HeroEnum } from "@/types";

  @Component
  export default class Portrait extends Vue {
    @Prop() private hero!: HeroEnum;

    private get src() {
      return require(`@/assets/img/${this.hero}.png`);
    }

    private get selectedHero() {
      return this.$store.state.selectedHero;
    }
  }
</script>

<style scoped lang="scss">
  img.faded {
    opacity: 0.5;
  }
</style>
