import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/style.css'
import { Swipe, SwipeItem, CountDown, List } from "vant";
import 'vant/lib/index.css';
Vue.use(List);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(CountDown);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
