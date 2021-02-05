import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "./assets/scss/main.scss";
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  render: h => h(App)
}).$mount("#app");
