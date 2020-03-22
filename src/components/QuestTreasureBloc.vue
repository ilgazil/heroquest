<template>
  <div>
    <h1>Trésors de quête</h1>

    <ul>
      <li><fancy-checkbox v-model="borinArmor">Armure de Borin</fancy-checkbox></li>
      <li><fancy-checkbox v-model="protectionCloak">Cape de Protection</fancy-checkbox></li>
      <li><fancy-checkbox v-model="orcScourge">Fléau des Orcs</fancy-checkbox></li>
      <li><fancy-checkbox v-model="spiritSteel">Fer de l'Esprit</fancy-checkbox></li>
      <li><fancy-checkbox v-model="loreTalisman">Talisman de Lore</fancy-checkbox></li>
      <li><fancy-checkbox v-model="returnScepter">Sceptre du Rappel</fancy-checkbox></li>
    </ul>

    <ul>
      <li><fancy-checkbox v-model="balurBracers">Bracelets de Balur</fancy-checkbox></li>
      <li><fancy-checkbox v-model="ancientsCoat">Manteau des Anciens</fancy-checkbox></li>
      <li><fancy-checkbox v-model="livingStrength">Force Vive</fancy-checkbox></li>
      <li><fancy-checkbox v-model="sageRing">Anneau des Sages</fancy-checkbox></li>
      <li><fancy-checkbox v-model="returnRing">Anneau du Retour</fancy-checkbox></li>
      <li><fancy-checkbox v-model="magicalLightning">Foudre Magique</fancy-checkbox></li>
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
  export default class QuestTreasureBloc extends Vue {
    @Prop() private hero!: HeroEnum;

    private borinArmor = false;
    private protectionCloak = false;
    private orcScourge = false;
    private spiritSteel = false;
    private loreTalisman = false;
    private returnScepter = false;
    private balurBracers = false;
    private ancientsCoat = false;
    private livingStrength = false;
    private sageRing = false;
    private returnRing = false;
    private magicalLightning = false;
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