import { createStore } from 'vuex'

export default createStore({
  state: {
    order: []
  },
  getters: {
    order: state => {
      return state.order
    }
  },
  mutations: {
    addOrder(state, order){
      state.order = order
    },
    addquantity(state,target){
      state.order[target].quantity++
    },
    cutquantity(state,target){
      state.order[target].quantity--
    },
    removegoods(state,target){
      state.order.splice(target,1)
    }
  },
  actions: {
    getOrder(context,order){
      console.log(order)
      context.commit('addOrder',order)
    },
    getaddquantity(context,target){
      context.commit('addquantity',target)
    },
    getcutquantity(context,target){
      context.commit('cutquantity',target)
    },
    getremovegoods(context,target){
      context.commit('removegoods',target)
    }
    
  },
  modules: {
  }

})
