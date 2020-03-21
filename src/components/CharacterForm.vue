<template>
  <div>
    form {{ character }}
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class Character extends Vue {
    @Prop() private character!: string;
  }
</script>
