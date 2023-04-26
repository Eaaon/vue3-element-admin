import { createStore } from 'vuex'
import app from '@/store/modules/app'
import permission from '@/store/modules/permission'

const store = createStore({
  // state:{
  //   count:0
  // },
  // getters: {
   
  // },
  // mutations: {
  //   increment(state){
  //     state.count++
  //   }
  // },
  // actions: {
  //   increment ({ commit }) {
  //     commit('increment')
  //   }
  // },
  modules: {
    app,
    permission
  }
})

export default store