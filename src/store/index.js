// JavaScript source code
import Vue from 'vue'
import Vuex from 'vuex'

import product from './modules/product'

Vue.use(Vuex)

export default new Vue.Store({
    modules: {
        product
    }
})
