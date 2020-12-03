import Vue from 'vue';
import { getModule } from 'vuex-module-decorators';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import PeerStore from '@/store/modules/peer';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    getModule(PeerStore).open({});
  },
  beforeDestroy() {
    getModule(PeerStore).close();
  },
  render: h => h(App),
}).$mount('#app');

window.onbeforeunload = () => {
  getModule(PeerStore).close();
};
