import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    count: 0
  },
  mutations: {
    IMCREMENT_COUNT(state) {
      state.count += 1
    }
  },
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    }
  }
})
