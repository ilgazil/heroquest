<template>
  <div>
    <sheet :hero="id" />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { Route } from "vue-router";
  import store from "@/store";

  import Sheet from "@/components/Sheet.vue";

  import { HeroEnum } from "@/types";

  @Component({
    components: {
      Sheet,
    },

    beforeRouteEnter: (to: Route, from: Route, next: Function) => {
      store.commit('setSelectedHero', to.params.id);
      next();
    },

    beforeRouteUpdate: (to: Route, from: Route, next: Function) => {
      store.commit('setSelectedHero', to.params.id);
      next();
    },

    beforeRouteLeave: (to: Route, from: Route, next: Function) => {
      store.commit('setSelectedHero', '');
      next();
    },
  })
  export default class Hero extends Vue {
    @Prop() private id!: HeroEnum;

    private edit = false;
  }
</script>
