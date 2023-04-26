const state = {
  sidebar:{
    isCollapse: false
  },
  count:0,
}

const mutations = {
  increment:(state:any) =>{
    state.count++
  },
  changeCollapse:(state:any) =>{
    state.sidebar.isCollapse = !state.sidebar.isCollapse
  }
}

const actions = {
  increment(context:any){
    context.commit('increment')
  },
  changeCollapse(context:any){
    context.commit('changeCollapse')
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
