<template>
  <div>
    <h1>Armes à distance</h1>

    <ul>
      <li><fancy-checkbox v-model="crossbow">Arbalète</fancy-checkbox></li>
      <li><fancy-checkbox v-model="longBow">Arc long</fancy-checkbox></li>
    </ul>
    <ul>
      <li><fancy-checkbox v-model="daguer">Dague</fancy-checkbox></li>
      <li><fancy-checkbox v-model="hatchet">Hachette</fancy-checkbox></li>
    </ul>

    <div>
      Flèches : {{ arrows }}
      <b-button variant="danger" size="sm" @click="throwArrow" :disabled="!arrows">-1</b-button>
      <b-button variant="success" size="sm" @click="addArrows">+5</b-button>
    </div>
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
  export default class RangedWeaponBloc extends Vue {
    @Prop() private hero!: HeroEnum;

    private crossbow = false;
    private daguer = false;
    private longBow = false;
    private hatchet = false;

    private arrows = 0;

    private throwArrow() {
      this.arrows--
    }

    private addArrows() {
      this.arrows += 5
    }
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