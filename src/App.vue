<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img src="@/assets/img/logo.png" class="logo"/></router-link>

      <router-link to="/sheet/barbarian"><character-portrait character="barbarian"/></router-link>
      <router-link to="/sheet/dwarf"><character-portrait character="dwarf"/></router-link>
      <router-link to="/sheet/elf"><character-portrait character="elf"/></router-link>
      <router-link to="/sheet/wizard"><character-portrait character="wizard"/></router-link>
      <router-link to="/sync" class="float-right"><div class="h3 sync-button"><b-icon icon="gear-fill"></b-icon></div></router-link>
    </div>

    <router-view id="view"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  import CharacterPortrait from "@/components/CharacterPortrait.vue";

  @Component({
    components: {
      CharacterPortrait,
    },
  })
  export default class App extends Vue {}
</script>

<style scoped lang="scss">
  #app {
    height: 100vh;
    background-image: url('~@/assets/img/scroll-bg.jpg');
  }
  #header {
    height: 200px;
    padding-top: 20px;
    text-align: center;
  }

  .logo {
    margin-right: 50px;
  }

  .sync-button {
    color: #ff7700;
    margin-right: 15px;
  }

  #view {
    text-align: center;
    height: calc(100vh - 200px);
    overflow: auto;
  }
</style>
