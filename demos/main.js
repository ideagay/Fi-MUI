import Vue from 'vue';
import '../packages/theme/src/index.less';
import FiMUI from '../src/index.js';
import App from './App.vue';
import router from './router/index';
import sidebar from 'components/sidebar.vue';
import footer from 'components/footer.vue';
import demoBlock from 'components/demo-block.vue';

Vue.config.productionTip = false;
Vue.use(FiMUI);
Vue.component('sidebar', sidebar);
Vue.component('my-footer', footer);
Vue.component('demo-block', demoBlock);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
