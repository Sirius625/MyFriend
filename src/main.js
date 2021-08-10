import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import store from './store/store'

new Vue({
  render: h => h(App),
  router,
  store,
  components:{App},
  template: '<App/>'
  
}).$mount('#app')
