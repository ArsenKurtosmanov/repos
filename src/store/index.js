import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products,
        user
    }
    

})