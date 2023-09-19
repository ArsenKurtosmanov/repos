
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from '../node_modules/vuetify'
import * as fb from 'firebase/app'
import '../node_modules/vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created (){
    const firebaseConfig = {
      apiKey: "AIzaSyAJ3dKu3uXbLj2Zhvc33TpFAWMChh13N9g",
      authDomain: "onlinestore-8ae20.firebaseapp.com",
      projectId: "onlinestore-8ae20",
      storageBucket: "onlinestore-8ae20.appspot.com",
      messagingSenderId: "711398392439",
      appId: "1:711398392439:web:e1f45b2f647d0a2e053c72",
      measurementId: "G-TQGVGK34Y8"
    }

    fb.initializeApp(firebaseConfig)
  }
  
})
