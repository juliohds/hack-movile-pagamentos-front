import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saldo: 0,
    credito: 0
  },
  mutations: {
    atualizarCredito (state, payload) {
      state.credito = payload
    }
  }
})