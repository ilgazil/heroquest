<template>
  <div id="app" class="flex flex-col items-center h-screen">
    <div class="w-app flex-none flex justify-between items-center pt-2">
      <router-link to="/"
        ><img src="@/assets/img/logo.png" class="logo"
      /></router-link>

      <form
        v-if="!player"
        class="flex space-x-4 p-2 bg-yellow-300 bg-opacity-50 border border-yellow-800"
        @submit.prevent="register"
      >
        <input
          v-model="name"
          class="bg-transparent placehoder:text-yellow-900 placehoder:font-bold text-yellow-900 font-bold"
          type="text"
          placeholder="Nom de joueur"
          v-focus
        />
        <button type="submit">
          <svg class="w-10 h-10 text-yellow-900" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"
            />
          </svg>
        </button>
      </form>

      <div v-else class="flex">
        <router-link to="/hero/barbarian"
          ><HeroPortrait hero="barbarian"
        /></router-link>
        <router-link to="/hero/dwarf"
          ><HeroPortrait hero="dwarf"
        /></router-link>
        <router-link to="/hero/elf"><HeroPortrait hero="elf" /></router-link>
        <router-link to="/hero/wizard"
          ><HeroPortrait hero="wizard"
        /></router-link>
      </div>

      <div class="flex flex-col items-center space-y-4">
        <div class="w-10 h-10 relative">
          <svg
            class="absolute inset-0 w-10 h-10"
            :class="[
              isOnline ? 'text-green-800' : 'text-red-800 animate-pulse',
            ]"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,2A8,8 0 0,0 4,10C4,14.03 7,17.42 11,17.93V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15A1,1 0 0,0 14,19H13V17.93C17,17.43 20,14.03 20,10A8,8 0 0,0 12,2M12,4C12,4 12.74,5.28 13.26,7H10.74C11.26,5.28 12,4 12,4M9.77,4.43C9.5,4.93 9.09,5.84 8.74,7H6.81C7.5,5.84 8.5,4.93 9.77,4.43M14.23,4.44C15.5,4.94 16.5,5.84 17.19,7H15.26C14.91,5.84 14.5,4.93 14.23,4.44M6.09,9H8.32C8.28,9.33 8.25,9.66 8.25,10C8.25,10.34 8.28,10.67 8.32,11H6.09C6.03,10.67 6,10.34 6,10C6,9.66 6.03,9.33 6.09,9M10.32,9H13.68C13.72,9.33 13.75,9.66 13.75,10C13.75,10.34 13.72,10.67 13.68,11H10.32C10.28,10.67 10.25,10.34 10.25,10C10.25,9.66 10.28,9.33 10.32,9M15.68,9H17.91C17.97,9.33 18,9.66 18,10C18,10.34 17.97,10.67 17.91,11H15.68C15.72,10.67 15.75,10.34 15.75,10C15.75,9.66 15.72,9.33 15.68,9M6.81,13H8.74C9.09,14.16 9.5,15.07 9.77,15.56C8.5,15.06 7.5,14.16 6.81,13M10.74,13H13.26C12.74,14.72 12,16 12,16C12,16 11.26,14.72 10.74,13M15.26,13H17.19C16.5,14.16 15.5,15.07 14.23,15.57C14.5,15.07 14.91,14.16 15.26,13Z"
            />
          </svg>

          <svg
            v-if="!isOnline"
            class="absolute left-1 w-10 h-10 text-blue-500 animate-bounce"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </div>

        <div v-if="player">
          {{ player }}
          <svg
            class="w-4 h-4 m-auto cursor-pointer"
            viewBox="0 0 24 24"
            @click="unregister"
          >
            <path
              fill="currentColor"
              d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div
      class="w-app flex-grow overflow-x-hidden overflow-y-auto scrollbar-thin"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";
import HeroPortrait from "@/components/HeroPortrait.vue";
import { websocket } from "@/shared/websocket";

@Options({
  components: {
    HeroPortrait,
  },

  directives: {
    focus(el: HTMLElement) {
      el.focus();
    },
  },
})
export default class HelloWorld extends Vue {
  @State("player") player!: string;

  name = "";

  get isOnline(): boolean {
    return websocket.status === "open";
  }

  @Action("playAs") playAs!: CallableFunction;

  register() {
    this.playAs(this.name);
  }

  unregister() {
    this.playAs("");
    this.$router.push({ name: "Home" });
  }
}
</script>

<style scoped lang="scss">
#app {
  background-image: url("~@/assets/img/scroll-bg.jpg");
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

<style scoped lang="postcss">
.placehoder\:text-yellow-900::placeholder {
  @apply text-yellow-900;
}

.placehoder\:font-bold::placeholder {
  @apply font-bold;
}
</style>
