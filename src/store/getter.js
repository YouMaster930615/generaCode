import home from './modules/home'
const getters = {
  homeList: () => home.state.nameList,
  amount: () => home.state.amountNumber
}

export default getters
