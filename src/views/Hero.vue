<template>
  <CharacterSheet :hero="hero" :writable="isWritable" />
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { getModule } from 'vuex-module-decorators';

  import CharacterStore from '@/store/modules/character';
  import PeerStore, { peerIdToRole } from '@/store/modules/peer';
  import { Hero as HeroEntity, HeroType } from '@/types';

  import CharacterSheet from '@/components/CharacterSheet.vue';

  @Component({
    components: {
      CharacterSheet,
    },
  })
  export default class Hero extends Vue {
    @Prop(String)
    private heroId!: HeroType;

    private get hero(): HeroEntity {
      return getModule(CharacterStore)[this.heroId];
    }

    private get isWritable(): boolean {
      const peerId = getModule(PeerStore).id;

      return !!peerId && peerIdToRole(peerId) === this.heroId;
    }
  }
</script>
