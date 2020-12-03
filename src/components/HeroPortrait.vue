<template>
  <div class="relative">
    <img :src="src" :alt="id" :class="{ faded: !isSelected }" />

    <div class="absolute bottom-0 right-0 mb-4 mr-4 w-6 h-6 rounded-full" :class="[isOnline ? 'bg-green-700' : 'bg-red-700']">
      <svg v-if="!isWritable" class="m-auto mt-1 text-white w-4 h-4" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { getModule } from 'vuex-module-decorators';

  import PeerStore, { peerIdToRole } from '@/store/modules/peer';
  import { websocket } from '@/shared/websocket';
  import { HeroType } from '@/types';

  @Component
  export default class Portrait extends Vue {
    @Prop() private id!: HeroType;

    private get src() {
      return require(`@/assets/img/${this.id}.png`);
    }

    private get isSelected(): boolean {
      return !this.$route.params?.heroId || this.id === this.$route.params.heroId;
    }

    private get isWritable(): boolean {
      return false;
    }

    private get isOnline(): boolean {
      // @todo
      return this.isWritable || websocket.hasConnection(this.id);
    }
  }
</script>

<style scoped lang="scss">
  img.faded {
    opacity: 0.5;
  }
</style>
