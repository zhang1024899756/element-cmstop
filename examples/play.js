import Vue from 'vue';
import Cmstop from 'main/index.js';
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss';

Vue.use(Cmstop);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
