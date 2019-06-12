export default {
   namespaced: true,
   state: {
      user:{}
   },
   mutations: {
      set: (state, payload) => {
         state.user = payload;
      },
      remove:(state)=>{
         state.user = {};
      }
   },
   actions: {
      set: ({commit}, payload) => {
         commit('set', payload)
      },
      remove: ({commit}) =>{
         commit('remove')
      }
   },
   getters: {
      username : state => state.user.username,
      userid : state => state.user.user_id
   }
}
