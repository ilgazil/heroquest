<template>
  <div id="sheet" class="relative my-0 mx-auto cursor-default">
    <svg
      id="play"
      class="h-16 w-16 cursor-pointer text-yellow-700 hover:text-yellow-600"
      viewBox="0 0 24 24"
      @click="togglePlay"
    >
      <path
        v-if="player !== sheet.player"
        fill="currentColor"
        d="M7.97,16L5,19C4.67,19.3 4.23,19.5 3.75,19.5A1.75,1.75 0 0,1 2,17.75V17.5L3,10.12C3.21,7.81 5.14,6 7.5,6H16.5C18.86,6 20.79,7.81 21,10.12L22,17.5V17.75A1.75,1.75 0 0,1 20.25,19.5C19.77,19.5 19.33,19.3 19,19L16.03,16H7.97M7,8V10H5V11H7V13H8V11H10V10H8V8H7M16.5,8A0.75,0.75 0 0,0 15.75,8.75A0.75,0.75 0 0,0 16.5,9.5A0.75,0.75 0 0,0 17.25,8.75A0.75,0.75 0 0,0 16.5,8M14.75,9.75A0.75,0.75 0 0,0 14,10.5A0.75,0.75 0 0,0 14.75,11.25A0.75,0.75 0 0,0 15.5,10.5A0.75,0.75 0 0,0 14.75,9.75M18.25,9.75A0.75,0.75 0 0,0 17.5,10.5A0.75,0.75 0 0,0 18.25,11.25A0.75,0.75 0 0,0 19,10.5A0.75,0.75 0 0,0 18.25,9.75M16.5,11.5A0.75,0.75 0 0,0 15.75,12.25A0.75,0.75 0 0,0 16.5,13A0.75,0.75 0 0,0 17.25,12.25A0.75,0.75 0 0,0 16.5,11.5Z"
      />
      <path
        v-else
        fill="currentColor"
        d="M2,5.27L3.28,4L20,20.72L18.73,22L12.73,16H7.97L5,19C4.67,19.3 4.23,19.5 3.75,19.5A1.75,1.75 0 0,1 2,17.75V17.5L3,10.12C3.1,9.09 3.53,8.17 4.19,7.46L2,5.27M5,10V11H7V13H8V11.27L6.73,10H5M16.5,6C18.86,6 20.79,7.81 21,10.12L22,17.5V17.75C22,18.41 21.64,19 21.1,19.28L7.82,6H16.5M16.5,8A0.75,0.75 0 0,0 15.75,8.75A0.75,0.75 0 0,0 16.5,9.5A0.75,0.75 0 0,0 17.25,8.75A0.75,0.75 0 0,0 16.5,8M14.75,9.75A0.75,0.75 0 0,0 14,10.5A0.75,0.75 0 0,0 14.75,11.25A0.75,0.75 0 0,0 15.5,10.5A0.75,0.75 0 0,0 14.75,9.75M18.25,9.75A0.75,0.75 0 0,0 17.5,10.5A0.75,0.75 0 0,0 18.25,11.25A0.75,0.75 0 0,0 19,10.5A0.75,0.75 0 0,0 18.25,9.75M16.5,11.5A0.75,0.75 0 0,0 15.75,12.25A0.75,0.75 0 0,0 16.5,13A0.75,0.75 0 0,0 17.25,12.25A0.75,0.75 0 0,0 16.5,11.5Z"
      />
    </svg>

    <div id="passive" class="flex flex-col justify-center text-center">
      <p v-if="sheet.hero === 'barbarian'">
        Lorsque vous êtes à 2 points de vie ou moins, vous entrez en frénésie.
        Vous lancez alors 1 dé de combat supplémentaire à l'attaque et à la
        défense (au corps à corps uniquement). Cette rage perdure tant que vous
        avez 2 points de vie ou moins.
      </p>

      <template v-else-if="sheet.hero === 'dwarf'">
        <p>
          Vous n'avez pas besoin de trousse à outils pour désamorcer un piège.
          Lorsque vous tentez de désamorcer un piège, lancez 1 dé de combat. Si
          vous n'obtenez pas de Bouclier Noir, vous réussissez. Sinon vous
          échouez et subissez immédiatement les conséquences.
        </p>
        <p>
          Lorsque vous cherchez un trésor, piochez 2 cartes et défausser celle
          de votre choix.
        </p>
      </template>

      <p v-else-if="sheet.hero === 'elf'">
        Une seule fois par tour, vous pouvez relancer 1 dé de combat lors de vos
        attaques à distance (arc, arbalète, armes de jet)
      </p>

      <p v-else-if="sheet.hero === 'wizard'">
        Lorsque vous êtes à 2 points de vie ou moins, vous entrez dans un état
        d'alerte. Vous pouvez relancer 1D6 de déplacement de votre choix. Cet
        état d'alerte perdure tant que vous avez 2 points de vie ou moins.
      </p>
    </div>

    <div id="weapon-bloc">
      <h1 class="text-4xl">Armes</h1>

      <ul class="ml-16">
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.daguer"
            @change="update('daguer', $event)"
            >Dague</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.shortSword"
            @change="update('shortSword', $event)"
            >Épée courte</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.fineSword"
            @change="update('fineSword', $event)"
            >Fine épée</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.steelLongSword"
            @change="update('steelLongSword', $event)"
            >Épée longue d'acier</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.heavySword"
            @change="update('heavySword', $event)"
            >Épée lourde à double tranchant</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.hatchet"
            @change="update('hatchet', $event)"
            >Hachette</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.battleAxe"
            @change="update('battleAxe', $event)"
            >Hache d'armes</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.halberd"
            @change="update('halberd', $event)"
            >Hallebarde</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.spear"
            @change="update('spear', $event)"
            >Lance</FancyCheckbox
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.club"
            @change="update('club', $event)"
            >Gourdin</FancyCheckbox
          >
        </li>
      </ul>
    </div>

    <div id="ranged-weapon-bloc">
      <h1 class="text-4xl">Armes à distance</h1>

      <div class="flex space-x-24 justify-center">
        <ul>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.crossbow"
              @change="update('crossbow', $event)"
              >Arbalète</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.longBow"
              @change="update('longBow', $event)"
              >Arc long</FancyCheckbox
            >
          </li>
        </ul>

        <ul>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.daguer"
              @change="update('daguer', $event)"
              >Dague</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.hatchet"
              @change="update('hatchet', $event)"
              >Hachette</FancyCheckbox
            >
          </li>
        </ul>
      </div>

      <div class="space-x-2 text-center">
        <span>Flèches : {{ sheet.arrows }}</span>
        <button
          class="w-6 h-6 rounded bg-yellow-700"
          :class="{
            'opacity-50 cursor-default': !sheet.arrows,
            'hover:bg-yellow-600': sheet.arrows,
          }"
          :disabled="!sheet.arrows"
          @click="update('arrows', sheet.arrows - 1)"
        >
          -1
        </button>
        <button
          class="w-6 h-6 rounded bg-yellow-700 hover:bg-yellow-600"
          @click="update('arrows', sheet.arrows + 5)"
        >
          +5
        </button>
      </div>
    </div>

    <div id="armor-bloc">
      <h1 class="text-4xl">Armures</h1>

      <div class="flex space-x-24 justify-center">
        <ul>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.leatherArmor"
              @change="update('leatherArmor', $event)"
              >Pourpoint en cuir</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.chainMail"
              @change="update('chainMail', $event)"
              >Cotte de maille</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.steelArmor"
              @change="update('steelArmor', $event)"
              >Armure de fer</FancyCheckbox
            >
          </li>
        </ul>

        <ul>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.shield"
              @change="update('shield', $event)"
              >Bouclier</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.helmet"
              @change="update('helmet', $event)"
              >Casque</FancyCheckbox
            >
          </li>
        </ul>
      </div>
    </div>

    <div id="potion-bloc">
      <h1 class="mb-4 text-4xl">Potions</h1>

      <ul class="space-y-4">
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.healing"
            @change="update('healing', $event)"
            >Potions de Guérison</ObjectStack
          >
        </li>
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.speed"
            @change="update('speed', $event)"
            >Potions de Vitesse</ObjectStack
          >
        </li>
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.resistance"
            @change="update('resistance', $event)"
            >Potions de Résistance</ObjectStack
          >
        </li>
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.strength"
            @change="update('strength', $event)"
            >Potions de Force</ObjectStack
          >
        </li>
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.heroic"
            @change="update('heroic', $event)"
            >Breuvages Héroïques</ObjectStack
          >
        </li>
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.holy"
            @change="update('holy', $event)"
            >Eaux Bénites</ObjectStack
          >
        </li>
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.life"
            @change="update('life', $event)"
            >Elixirs de Vie</ObjectStack
          >
        </li>
      </ul>
    </div>

    <div id="treasure-bloc">
      <h1 class="text-4xl">Trésors de quête</h1>

      <div class="flex space-x-24 justify-center pt-8">
        <ul>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.borinArmor"
              @change="update('borinArmor', $event)"
              >Armure de Borin</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.protectionCloak"
              @change="update('protectionCloak', $event)"
              >Cape de Protection</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.orcScourge"
              @change="update('orcScourge', $event)"
              >Fléau des Orcs</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.spiritSteel"
              @change="update('spiritSteel', $event)"
              >Fer de l'Esprit</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.loreTalisman"
              @change="update('loreTalisman', $event)"
              >Talisman de Lore</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.returnScepter"
              @change="update('returnScepter', $event)"
              >Sceptre du Rappel</FancyCheckbox
            >
          </li>
        </ul>

        <ul>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.balurBracers"
              @change="update('balurBracers', $event)"
              >Bracelets de Balur</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.ancientsCoat"
              @change="update('ancientsCoat', $event)"
              >Manteau des Anciens</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.livingStrength"
              @change="update('livingStrength', $event)"
              >Force Vive</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.sageRing"
              @change="update('sageRing', $event)"
              >Anneau des Sages</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.returnRing"
              @change="update('returnRing', $event)"
              >Anneau du Retour</FancyCheckbox
            >
          </li>
          <li>
            <FancyCheckbox
              :disabled="!isWritable"
              :checked="sheet.magicalLightning"
              @change="update('magicalLightning', $event)"
              >Foudre Magique</FancyCheckbox
            >
          </li>
        </ul>
      </div>
    </div>

    <div id="pouch-bloc">
      <ul class="w-1/2 mx-auto">
        <li>
          <ObjectStack
            :disabled="!isWritable"
            :amount="sheet.rope"
            @change="update('rope', $event)"
            >Corde</ObjectStack
          >
        </li>
        <li>
          <FancyCheckbox
            :disabled="!isWritable"
            :checked="sheet.toolset"
            @change="update('toolset', $event)"
            >Trousse à outils</FancyCheckbox
          >
        </li>
      </ul>
    </div>

    <div id="note-bloc">
      <h1 class="text-4xl">Notes</h1>

      <textarea
        :disabled="!isWritable"
        class="px-8 w-full border-none bg-transparent resize-none"
        :value="sheet.notes"
        @input="update('notes', $event.target.value.trim())"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";
import FancyCheckbox from "@/components/FancyCheckbox.vue";
import ObjectStack from "@/components/ObjectStack.vue";
import { Hero, Sheet } from "@/types";

@Options({
  components: {
    FancyCheckbox,
    ObjectStack,
  },

  props: {
    sheet: {
      type: Object as PropType<Sheet>,
      required: true,
    },
  },
})
export default class CharacterSheet extends Vue {
  readonly sheet!: Sheet;

  @State("player") player!: string;

  get isWritable(): boolean {
    return this.sheet.player === this.player;
  }

  @Action("updateSheet") updateSheet!: CallableFunction;

  togglePlay() {
    this.updateSheet({
      hero: this.sheet.hero,
      player: this.player !== this.sheet.player ? this.player : "",
    });
  }

  update(field: keyof Sheet, value: unknown) {
    this.updateSheet({
      hero: this.sheet.hero,
      [field]: value,
    });
  }
}
</script>

<style scoped lang="scss">
#sheet {
  width: 1137px;
  height: 1608px;
  background-repeat: no-repeat;
  background-image: url("~@/assets/img/sheet.png");
}

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
  top: 95px;
  left: 535px;
}

#passive {
  position: absolute;
  top: 217px;
  left: 265px;
  width: 600px;
  height: 120px;
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