<template>
  <div>
    <character-display v-if="!edit" :character="character" />
    <character-form v-else :character="character" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { Route } from "vue-router";
  import store from "@/store";

  import CharacterDisplay from "@/components/CharacterDisplay.vue";
  import CharacterForm from "@/components/CharacterForm.vue";

  @Component({
    components: {
      CharacterDisplay,
      CharacterForm,
    },

    beforeRouteEnter: (to: Route, from: Route, next: Function) => {
      store.commit('setSelectedCharacter', to.params.character);
      next();
    },

    beforeRouteUpdate: (to: Route, from: Route, next: Function) => {
      store.commit('setSelectedCharacter', to.params.character);
      next();
    },

    beforeRouteLeave: (to: Route, from: Route, next: Function) => {
      store.commit('setSelectedCharacter', '');
      next();
    },
  })
  export default class CharacterSheet extends Vue {
    @Prop() private character!: string;
    private edit = false;
  }
</script>
