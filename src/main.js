import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Axios
import axios from "axios"
import VueAxios from "vue-axios"
import './plugins/element.js'

Vue.config.productionTip = false

window.HOST = "http://www.baidu.com"

Vue.use(VueAxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
