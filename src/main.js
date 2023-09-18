
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from '../node_modules/vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
