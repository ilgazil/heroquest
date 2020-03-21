<template>
  <img :src="src" :alt="character" :class="{ faded: character !== selectedCharacter }" />
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Character extends Vue {
    @Prop() private character!: string;

    private get src() {
      return require(`@/assets/img/${this.character}.png`);
    }

    private get selectedCharacter() {
      return this.$store.state.selectedCharacter;
    }
  }
</script>

<style scoped lang="scss">
  img.faded {
    opacity: 0.5;
  }
</style>
