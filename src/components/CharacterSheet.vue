<template>
  <div id="sheet" class="relative my-0 mx-auto cursor-default">
    <span id="play" class="text-center">
      <button @click="play">Jouer</button>
    </span>

    <div id="weapon-bloc">
      <h1 class="text-4xl">Armes</h1>

      <ul class="ml-16">
        <li><FancyCheckbox :value="hero.daguer" @input="update('daguer', $event)">Dague</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.shortSword" @input="update('shortSword', $event)">Épée courte</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.fineSword" @input="update('fineSword', $event)">Fine épée</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.steelLongSword" @input="update('steelLongSword', $event)">Épée longue d'acier</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.heavySword" @input="update('heavySword', $event)">Épée lourde à double tranchant</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.hatchet" @input="update('hatchet', $event)">Hachette</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.battleAxe" @input="update('battleAxe', $event)">Hache d'armes</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.halberd" @input="update('halberd', $event)">Hallebarde</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.spear" @input="update('spear', $event)">Lance</FancyCheckbox></li>
        <li><FancyCheckbox :value="hero.club" @input="update('club', $event)">Gourdin</FancyCheckbox></li>
      </ul>
    </div>

    <div id="ranged-weapon-bloc">
      <h1 class="text-4xl">Armes à distance</h1>

      <div class="flex space-x-24 justify-center">
        <ul>
          <li><FancyCheckbox :value="hero.crossbow" @input="update('crossbow', $event)">Arbalète</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.longBow" @input="update('longBow', $event)">Arc long</FancyCheckbox></li>
        </ul>

        <ul>
          <li><FancyCheckbox :value="hero.daguer" @input="update('daguer', $event)">Dague</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.hatchet" @input="update('hatchet', $event)">Hachette</FancyCheckbox></li>
        </ul>
      </div>

      <div class="space-x-2 text-center">
        <span>Flèches : {{ hero.arrows }}</span>
        <button class="w-6 h-6 rounded bg-yellow-700" :class="{ 'opacity-50': !hero.arrows }" :disabled="!hero.arrows" @click="update('arrows', hero.arrows - 1)">-1</button>
        <button class="w-6 h-6 rounded bg-yellow-700" @click="update('arrows', hero.arrows + 5)">+5</button>
      </div>
    </div>

    <div id="armor-bloc">
      <h1 class="text-4xl">Armures</h1>

      <div class="flex space-x-24 justify-center">
        <ul>
          <li><FancyCheckbox :value="hero.leatherArmor" @input="update('leatherArmor', $event)">Pourpoint en cuir</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.chainMail" @input="update('chainMail', $event)">Cotte de maille</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.steelArmor" @input="update('steelArmor', $event)">Armure de fer</FancyCheckbox></li>
        </ul>

        <ul>
          <li><FancyCheckbox :value="hero.shield" @input="update('shield', $event)">Bouclier</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.helmet" @input="update('helmet', $event)">Casque</FancyCheckbox></li>
        </ul>
      </div>
    </div>

    <div id="potion-bloc">
      <h1 class="mb-4 text-4xl">Potions</h1>

      <ul class="space-y-4">
        <li><ObjectStack :value="hero.healing" @input="update('healing', $event)">Potions de Guérison</ObjectStack></li>
        <li><ObjectStack :value="hero.speed" @input="update('speed', $event)">Potions de Vitesse</ObjectStack></li>
        <li><ObjectStack :value="hero.resistance" @input="update('resistance', $event)">Potions de Résistance</ObjectStack></li>
        <li><ObjectStack :value="hero.strength" @input="update('strength', $event)">Potions de Force</ObjectStack></li>
        <li><ObjectStack :value="hero.heroic" @input="update('heroic', $event)">Breuvages Héroïque</ObjectStack></li>
        <li><ObjectStack :value="hero.holy" @input="update('holy', $event)">Eaux Bénite</ObjectStack></li>
        <li><ObjectStack :value="hero.life" @input="update('life', $event)">Elixirs de Vie</ObjectStack></li>
      </ul>
    </div>

    <div id="treasure-bloc">
      <h1 class="text-4xl">Trésors de quête</h1>

      <div class="flex space-x-24 justify-center pt-8">
        <ul>
          <li><FancyCheckbox :value="hero.borinArmor" @input="update('borinArmor', $event)">Armure de Borin</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.protectionCloak" @input="update('protectionCloak', $event)">Cape de Protection</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.orcScourge" @input="update('orcScourge', $event)">Fléau des Orcs</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.spiritSteel" @input="update('spiritSteel', $event)">Fer de l'Esprit</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.loreTalisman" @input="update('loreTalisman', $event)">Talisman de Lore</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.returnScepter" @input="update('returnScepter', $event)">Sceptre du Rappel</FancyCheckbox></li>
        </ul>

        <ul>
          <li><FancyCheckbox :value="hero.balurBracers" @input="update('balurBracers', $event)">Bracelets de Balur</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.ancientsCoat" @input="update('ancientsCoat', $event)">Manteau des Anciens</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.livingStrength" @input="update('livingStrength', $event)">Force Vive</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.sageRing" @input="update('sageRing', $event)">Anneau des Sages</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.returnRing" @input="update('returnRing', $event)">Anneau du Retour</FancyCheckbox></li>
          <li><FancyCheckbox :value="hero.magicalLightning" @input="update('magicalLightning', $event)">Foudre Magique</FancyCheckbox></li>
        </ul>
      </div>
    </div>

    <div id="pouch-bloc">
      <ul class="w-1/2 mx-auto">
        <li><ObjectStack :value="hero.rope" @input="update('rope', $event)">Corde</ObjectStack></li>
        <li><FancyCheckbox :value="hero.toolset" @input="update('toolset', $event)">Trousse à outils</FancyCheckbox></li>
      </ul>
    </div>


    <div id="note-bloc">
      <h1 class="text-4xl">Notes</h1>

      <textarea class="px-8 w-full border-none bg-transparent resize-none" :value="hero.notes" @input="update('notes', $event.target.value)" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { getModule } from 'vuex-module-decorators';

  import CharacterStore from '@/store/modules/character';
  import { Hero } from '@/types';

  import FancyCheckbox from '@/components/FancyCheckbox.vue';
  import ObjectStack from '@/components/ObjectStack.vue';

  @Component({
    components: {
      FancyCheckbox,
      ObjectStack,
    },
  })
  export default class Sheet extends Vue {
    @Prop({ type: Object, required: true })
    private hero!: Hero;

    @Prop({ type: Boolean, default: false })
    private writable!: boolean;

    private play() {
      // @todo
    }

    private update(field: keyof Hero, value: unknown) {
      if (!this.writable) {
        return;
      }

      getModule(CharacterStore).updateHero({ id: this.hero.id, data: { [field]: value } });
    }
  }
</script>

<style scoped lang="scss">
  #sheet {
    width: 1137px;
    height: 1608px;
    background-repeat: no-repeat;
    background-image: url('~@/assets/img/sheet.png');
  }

  input,
  #armor-bloc,
  #note-bloc,
  #potion-bloc,
  #pouch-bloc,
  #treasure-bloc,
  #ranged-weapon-bloc,
  #weapon-bloc {
    position: absolute;
    border: none;
    background: transparent;
  }

  #play {
    position: absolute;
    top: 115px;
    left: 470px;
    width: 200px;
  }

  #armor-bloc {
    top: 550px;
    left: 588px;
    width: 479px;
  }

  #note-bloc {
    top: 1073px;
    left: 456px;
    width: 607px;

    textarea {
      height: 300px;
    }
  }

  #potion-bloc {
    top: 770px;
    left: 64px;
    width: 363px;
  }

  #pouch-bloc {
    top: 1360px;
    left: 64px;
    width: 363px;
  }

  #treasure-bloc {
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

  h1 {
    text-align: center;
  }
</style>