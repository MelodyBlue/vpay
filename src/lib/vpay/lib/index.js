import vpay from './vpay'

const myPlugin = {
  install (Vue, options) {
    Vue.component('vpay', vpay)
  }
}

export default myPlugin
