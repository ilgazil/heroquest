<template>
  <div class="flex select-none cursor-pointer" @click="toggle">
    <svg v-if="value" class="flex-none w-5 h-5" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
    </svg>

    <svg v-else class="flex-none w-5 h-5" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
    </svg>

    <span class="flex-grow ml-2">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class FancyCheckbox extends Vue {
    @Prop() private value!: boolean;

    private toggle() {
      this.$emit('input', !this.value)
    }
  }
</script>
