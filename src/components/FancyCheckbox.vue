<template>
  <span @click="toggle">
    <b-icon v-if="value" icon="x-square-fill"/>
    <b-icon v-else icon="square"/>
    <span class="label">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class FancyCheckbox extends Vue {
    @Prop() private value!: boolean;

    private toggle() {
      this.$emit('input', !this.value)
    }
  }
</script>

<style scoped lang="scss">
  span {
    cursor: pointer;
    user-select: none;
  }

  .label {
    margin-left: 5px;
  }
</style>