import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// Axios
import axios from 'axios'

// Styles
import '@/assets/scss/main.scss'
import '@/assets/scss/tailwind.scss'

axios.defaults.headers.get['Accepts'] = 'application/json'
// Add AFAS token if we have it
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = 'AfasToken ' + token
  }
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
