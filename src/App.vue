<template>
  <div id="app" class="flex flex-col items-center h-screen">
    <div class="w-app flex-none flex justify-between items-center pt-2">
      <router-link to="/"><img src="@/assets/img/logo.png" class="logo"/></router-link>

      <div class="flex">
        <router-link to="/hero/barbarian"><HeroPortrait id="barbarian"/></router-link>
        <router-link to="/hero/dwarf"><HeroPortrait id="dwarf"/></router-link>
        <router-link to="/hero/elf"><HeroPortrait id="elf"/></router-link>
        <router-link to="/hero/wizard"><HeroPortrait id="wizard"/></router-link>
      </div>

      <div class="w-10 h-10 relative">
        <svg class="absolute inset-0 w-10 h-10" :class="[ isOnline ? 'text-green-800' : 'text-red-800 animate-pulse' ]" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A8,8 0 0,0 4,10C4,14.03 7,17.42 11,17.93V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15A1,1 0 0,0 14,19H13V17.93C17,17.43 20,14.03 20,10A8,8 0 0,0 12,2M12,4C12,4 12.74,5.28 13.26,7H10.74C11.26,5.28 12,4 12,4M9.77,4.43C9.5,4.93 9.09,5.84 8.74,7H6.81C7.5,5.84 8.5,4.93 9.77,4.43M14.23,4.44C15.5,4.94 16.5,5.84 17.19,7H15.26C14.91,5.84 14.5,4.93 14.23,4.44M6.09,9H8.32C8.28,9.33 8.25,9.66 8.25,10C8.25,10.34 8.28,10.67 8.32,11H6.09C6.03,10.67 6,10.34 6,10C6,9.66 6.03,9.33 6.09,9M10.32,9H13.68C13.72,9.33 13.75,9.66 13.75,10C13.75,10.34 13.72,10.67 13.68,11H10.32C10.28,10.67 10.25,10.34 10.25,10C10.25,9.66 10.28,9.33 10.32,9M15.68,9H17.91C17.97,9.33 18,9.66 18,10C18,10.34 17.97,10.67 17.91,11H15.68C15.72,10.67 15.75,10.34 15.75,10C15.75,9.66 15.72,9.33 15.68,9M6.81,13H8.74C9.09,14.16 9.5,15.07 9.77,15.56C8.5,15.06 7.5,14.16 6.81,13M10.74,13H13.26C12.74,14.72 12,16 12,16C12,16 11.26,14.72 10.74,13M15.26,13H17.19C16.5,14.16 15.5,15.07 14.23,15.57C14.5,15.07 14.91,14.16 15.26,13Z"
          />
        </svg>

        <svg v-if="!isOnline" class="absolute left-1 w-10 h-10 text-blue-500 animate-bounce" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      </div>
    </div>

    <div class="w-app flex-grow overflow-x-hidden overflow-y-auto scrollbar-thin">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import HeroPortrait from '@/components/HeroPortrait.vue';
import { websocket } from '@/shared/websocket';

  @Component({
    components: {
      HeroPortrait,
    },
  })
  export default class App extends Vue {
    private get isOnline(): boolean {
      // @todo
      return websocket.status === 'open';
    }
  }
</script>

<style scoped lang="scss">
  #app {
    background-image: url('~@/assets/img/scroll-bg.jpg');
  }

  .w-app {
    width: 1137px;
  }

  .scrollbar-thin {
    scrollbar-width: thin;
  }

  .left-1 {
    left: 0.25rem;
  }
</style>
