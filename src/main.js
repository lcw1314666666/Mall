import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import toast from '@/components/common/toast/toast.js'

Vue.config.productionTip = false

Vue.use(toast)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



