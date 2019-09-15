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
import '@/assets/scss/tailwind.scss'
// Custom
import './fontawesome.js'

// Axios configuration
axios.defaults.headers.get['Content-Type'] = 'application/json'
// Add AFAS token if we have it
// axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = 'AfasToken ' + token
//   }
//   return config
// })

// Vuelidate
Vue.use(Vuelidate)

// Vue CLI
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
