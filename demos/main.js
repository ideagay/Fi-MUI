import Vue from 'vue';
import '../lib/theme/button.css';
import FiUI from '../src/index';
import App from './App.vue';
import router from './router/index';
import sidebar from 'components/sidebar.vue';
import footer from 'components/footer.vue';
import demoBlock from 'components/demo-block.vue';

Vue.config.productionTip = false
Vue.use(FiUI);
Vue.component('sidebar', sidebar);
Vue.component('my-footer', footer);
Vue.component('demo-block', demoBlock);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
