<template>
  <div class="text-center">
    <div>
      <slot></slot>
    </div>

    <button class="w-6 h-6 rounded bg-yellow-700" :class="{ 'opacity-50': !value }" :disabled="!value" @click="remove">-</button>
    {{ value }}
    <button class="w-6 h-6 rounded bg-yellow-700" @click="add">+</button>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

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
