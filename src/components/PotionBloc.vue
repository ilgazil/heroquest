<template>
  <div>
    <h1>Potions</h1>

    <ul>
      <li><object-stack v-model="healing">Potions de Guérison</object-stack></li>
      <li><object-stack v-model="speed">Potions de Vitesse</object-stack></li>
      <li><object-stack v-model="resistance">Potions de Résistance</object-stack></li>
      <li><object-stack v-model="strength">Potions de Force</object-stack></li>
      <li><object-stack v-model="heroic">Breuvages Héroïque</object-stack></li>
      <li><object-stack v-model="holy">Eaux Bénite</object-stack></li>
      <li><object-stack v-model="life">Elixirs de Vie</object-stack></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  import ObjectStack from "@/components/ObjectStack.vue";

  import { HeroEnum } from "@/types";

  @Component({
    components: {
      ObjectStack,
    },
  })
  export default class PotionBloc extends Vue {
    @Prop() private hero!: HeroEnum;

    private healing = 0;
    private speed = 0;
    private resistance = 0;
    private strength = 0;
    private heroic = 0;
    private holy = 0;
    private life = 0;
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
  }
</style>