import Vue from 'vue';
import App from './App.vue';
import Raphael from 'raphael/raphael';
global.Raphael = Raphael;
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
