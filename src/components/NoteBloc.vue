<template>
  <div>
    <h1>Notes</h1>

    <textarea v-model="notes" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  import { HeroEnum } from "@/types";

  @Component
  export default class NoteBloc extends Vue {
    @Prop() private hero!: HeroEnum;

    private notes = '';
  }
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }

  textarea {
    border: none;
    background: transparent;
    width: 95%;
    height: 300px;
    resize: none;
  }
</style>