import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import './registerServiceWorker'
// Packages
import Vuelidate from 'vuelidate'
import axios from 'axios'
// Styles
import '@/assets/scss/main.scss'
// Custom
import './fontawesome.js'

import BootstrapVue from 'bootstrap-vue'

// Axios default configuration
axios.defaults.headers.get['Content-Type'] = 'application/json'

// Vuelidate
Vue.use(Vuelidate)

// Vue CLI
Vue.config.productionTip = false

// Bootstrap
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
