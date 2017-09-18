import Vuex from 'vuex'
import { products } from '@/data/products'

const store = () => new Vuex.Store({

  state: {
    products: products,
    regions: [],
    volume: 0
  },
  mutations: {
    'ADD_REGION' (state, region) {
      state.regions.push(region)
    }
  },
  actions: {
    addRegion (commit, region) {
      commit('ADD_REGION', region)
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    regions (state) {
      return state.regions
    },
    volume (state) {
      return state.volume
    }
  }
})

export default store
