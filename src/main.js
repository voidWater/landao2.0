// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

/**element-ui*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'
Vue.use(ElementUI);

Vue.config.productionTip = false

/**全局注册自定义组件*/
import PageController from './components/PageController.vue';
Vue.component("PageController", PageController)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
