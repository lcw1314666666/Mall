import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import toast from '@/components/common/toast/toast.js'
import fastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(toast)

Vue.prototype.$bus = new Vue()

fastClick.attach(document.body)

Vue.use(vueLazyLoad, {
  loading: require('@/assets/img/common/timg.jpg')
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



