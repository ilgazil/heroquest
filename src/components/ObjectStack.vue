<template>
  <div id="potion-stack">
    <div>
      <slot></slot>
    </div>

    <b-button variant="danger" size="sm" @click="remove" :disabled="!value">-</b-button>
    {{ value }}
    <b-button variant="success" size="sm" @click="add">+</b-button>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class ObjectStack extends Vue {
    @Prop() private value!: number;

    private remove() {
      this.$emit('input', this.value - 1)
    }

    private add() {
      this.$emit('input', this.value + 1)
    }
  }
</script>

<style scoped lang="scss">
  #potion-stack {
    text-align: center;
  }
</style>