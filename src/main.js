import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/styles/index.scss'

Vue.config.productionTip = false

import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
