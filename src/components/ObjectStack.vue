<template>
  <div class="text-center">
    <div>
      <slot></slot>
    </div>

    <button
      class="w-6 h-6 rounded bg-yellow-700"
      :class="{
        'opacity-50 cursor-default': disabled || !amount,
        'hover:bg-yellow-600': !disabled && amount,
      }"
      :disabled="disabled || !amount"
      @click="remove"
    >
      -
    </button>
    {{ amount }}
    <button
      class="w-6 h-6 rounded bg-yellow-700"
      :class="[disabled ? 'opacity-50 cursor-default' : 'hover:bg-yellow-600']"
      :disabled="disabled"
      @click="add"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    amount: {
      type: Number,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["change"],
})
export default class ObjectStack extends Vue {
  readonly amount!: number;
  readonly disabled!: boolean;

  remove() {
    this.$emit("change", this.amount - 1);
  }

  add() {
    this.$emit("change", this.amount + 1);
  }
}
</script>
