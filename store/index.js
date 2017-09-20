// import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
import { products } from '@/data/products'

// export const plugins = [ VuexPersistence ]

export const state = () => ({
  products,
  regions: [],
  totalVolume: 0,
  totalPrice: 0
})

export const mutations = {
  'ADD_REGION' (state, region) {
    state.regions.push(region)
    state.totalVolume += region.volume
    state.totalPrice += region.subTotal
  },
  'REMOVE_REGION' (state, index) {
    let removed = state.regions.splice(index, 1)
    state.totalVolume -= removed[0].volume
    state.totalPrice -= removed[0].subTotal
  }
}

export const actions = {
  addRegion ({commit}, region) {
    commit('ADD_REGION', region)
  },
  removeRegion ({commit}, index) {
    commit('REMOVE_REGION', index)
  }
}

export const getters = {
  products (state) {
    return state.products
  },
  regions (state) {
    return state.regions
  },
  totalVolume (state) {
    return state.totalVolume.toFixed(2)
  },
  totalPrice (state) {
    return state.totalPrice.toFixed(2)
  }
}

// const store = () => new Vuex.Store({

//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   },
//   getters: {

//   }
// })

// export default store
