const state = {
  routes: [],
  token: ''
}

const mutations = {
  addRoutes:(state:any,routes:any) =>{
    state.routes = routes
  },
  removeRoutes:(state:any) =>{
    state.routes = []
  },
  addToken(state:any,token:string){
    state.token = token
  },
  removeToken(state:any){
    state.token = ""
  },
}

const actions = {
  addRoutes(context:any,routes:any){
    context.commit('addRoutes',routes)
  },
  removeRoutes(context:any){
    context.commit('removeRoutes')
  },
  addToken(context:any,token:string){
    context.commit('addToken',token)
  },
  removeToken(context:any){
    context.commit('removeToken')
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
