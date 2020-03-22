<template>
  <div id="sheet">
    <input id="player" type="text" name="player" placeholder="Joueur" />
    <weapon-bloc id="weapon-bloc" :hero="hero" />
    <ranged-weapon-bloc id="ranged-weapon-bloc" :hero="hero" />
    <potion-bloc id="potion-bloc" :hero="hero" />
    <armor-bloc id="armor-bloc" :hero="hero" />
    <quest-treasure-bloc id="quest-treasure-bloc" :hero="hero" />
    <pouch-bloc id="pouch-bloc" :hero="hero" />
    <note-bloc id="note-bloc" :hero="hero" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  import ArmorBloc from "@/components/ArmorBloc.vue";
  import NoteBloc from "@/components/NoteBloc.vue";
  import PotionBloc from "@/components/PotionBloc.vue";
  import PouchBloc from "@/components/PouchBloc.vue";
  import QuestTreasureBloc from "@/components/QuestTreasureBloc.vue";
  import RangedWeaponBloc from "@/components/RangedWeaponBloc.vue";
  import WeaponBloc from "@/components/WeaponBloc.vue";

  import { HeroEnum } from "@/types";

  @Component({
    components: {
      ArmorBloc,
      NoteBloc,
      PotionBloc,
      PouchBloc,
      QuestTreasureBloc,
      RangedWeaponBloc,
      WeaponBloc,
    },
  })
  export default class Sheet extends Vue {
    @Prop() private hero!: HeroEnum;
  }
</script>

<style scoped lang="scss">
  #sheet {
    width: 1137px;
    height: 1608px;
    margin: 0 auto;
    position: relative;
    background-repeat: no-repeat;
    background-image: url('~@/assets/img/sheet.png');
    cursor: default;
  }

  input,
  #armor-bloc,
  #note-bloc,
  #potion-bloc,
  #pouch-bloc,
  #quest-treasure-bloc,
  #ranged-weapon-bloc,
  #weapon-bloc {
    position: absolute;
    border: none;
    background: transparent;
  }

  #player {
    top: 115px;
    left: 470px;
    text-align: center;
    width: 200px;
  }

  #armor-bloc {
    top: 567px;
    left: 588px;
    width: 479px;
  }

  #note-bloc {
    top: 1073px;
    left: 456px;
    width: 607px;
  }

  #potion-bloc {
    top: 749px;
    left: 64px;
    width: 363px;
  }

  #pouch-bloc {
    top: 1360px;
    left: 64px;
    width: 363px;
  }

  #quest-treasure-bloc {
    top: 758px;
    left: 456px;
    width: 607px;
  }

  #ranged-weapon-bloc {
    top: 406px;
    left: 588px;
    width: 479px;
  }

  #weapon-bloc {
    top: 393px;
    left: 64px;
    width: 460px;
  }
</style>