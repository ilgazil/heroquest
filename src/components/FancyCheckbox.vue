<template>
  <div class="flex select-none cursor-pointer" @click="toggle">
    <svg
      v-if="checked"
      class="flex-none w-5 h-5"
      :class="{ 'text-gray-700': disabled }"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
      />
    </svg>

    <svg
      v-else
      class="flex-none w-5 h-5"
      :class="{ 'text-gray-700': disabled }"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
      />
    </svg>

    <span class="flex-grow ml-2">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    checked: {
      type: Boolean,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["change"],
})
export default class FancyCheckbox extends Vue {
  readonly checked!: boolean;
  readonly disabled!: boolean;

  toggle() {
    if (this.disabled) {
      return;
    }

    this.$emit("change", !this.checked);
  }
}
</script>
