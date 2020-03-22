<template>
  <div>
    <ul>
      <li><object-stack v-model="rope">Corde</object-stack></li>
      <li><fancy-checkbox v-model="toolset">Trousse à outils</fancy-checkbox></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  import FancyCheckbox from "@/components/FancyCheckbox.vue";
  import ObjectStack from "@/components/ObjectStack.vue";

  import { HeroEnum } from "@/types";

  @Component({
    components: {
      FancyCheckbox,
      ObjectStack,
    },
  })
  export default class PouchBloc extends Vue {
    @Prop() private hero!: HeroEnum;

    private rope = 0;
    private toolset = false;
  }
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
    text-align: center;
  }
</style>