import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.use(VueApollo);
Vue.use(Antd);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
