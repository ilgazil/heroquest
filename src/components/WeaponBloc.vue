<template>
  <div>
    <h1>Armes</h1>

    <ul>
      <li><fancy-checkbox v-model="daguer">Dague</fancy-checkbox></li>
      <li><fancy-checkbox v-model="shortSword">Épée courte</fancy-checkbox></li>
      <li><fancy-checkbox v-model="fineSword">Fine épée</fancy-checkbox></li>
      <li><fancy-checkbox v-model="steelLongSword">Épée longue d'acier</fancy-checkbox></li>
      <li><fancy-checkbox v-model="heavySword">Épée lourde à double tranchant</fancy-checkbox></li>
      <li><fancy-checkbox v-model="hatchet">Hachette</fancy-checkbox></li>
      <li><fancy-checkbox v-model="battleAxe">Hache d'armes</fancy-checkbox></li>
      <li><fancy-checkbox v-model="halberd">Hallebarde</fancy-checkbox></li>
      <li><fancy-checkbox v-model="spear">Lance</fancy-checkbox></li>
      <li><fancy-checkbox v-model="club">Gourdin</fancy-checkbox></li>
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

    private daguer = false;
    private shortSword = false;
    private fineSword = false;
    private steelLongSword = false;
    private heavySword = false;
    private hatchet = false;
    private battleAxe = false;
    private halberd = false;
    private spear = false;
    private club = false;
  }
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }

  ul {
    list-style: none;
    text-align: left;
    margin-left: 30px;
  }
</style>