<template>
  <div>
    <h1>Armures</h1>

    <ul>
      <li><fancy-checkbox v-model="shield">Bouclier</fancy-checkbox></li>
      <li><fancy-checkbox v-model="helmet">Casque</fancy-checkbox></li>
    </ul>

    <ul>
      <li><fancy-checkbox v-model="chainMail">Cotte de maille</fancy-checkbox></li>
      <li><fancy-checkbox v-model="steelArmor">Armure de fer</fancy-checkbox></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  import FancyCheckbox from "@/components/FancyCheckbox.vue";

  import { HeroEnum } from "@/types";

  @Component({
    components: {
      FancyCheckbox,
    },
  })
  export default class WeaponBloc extends Vue {
    @Prop() private hero!: HeroEnum;

    private shield = false;
    private helmet = false;
    private chainMail = false;
    private steelArmor = false;
  }
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }

  ul {
    display: inline-block;
    list-style: none;
    text-align: left;
  }
</style>