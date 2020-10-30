const home = {
  name: 'home',
  state: {
    nameList: [
      {
        price: 'jack',
        amount: 23
      },
      {
        price: 'rose',
        amount: 23453
      }
    ],
    amountNumber: 3
  },
  actions: {
    changeAmount ({ state, commit }, params = {}) {
      commit('CHANGEAMOUNT', params += 1)
    }
  },
  mutations: {
    CHANGEAMOUNT (state, changeNumber) {
      state.amountNumber = Math.random() * 100
      console.log(state)
    }
  }
}

export default home
