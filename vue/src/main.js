import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

Vue.config.productionTip = false

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
