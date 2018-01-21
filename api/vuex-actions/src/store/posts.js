import axios from 'axios'

export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    ['SET_POSTS'](state, payload) {
      state.posts = payload
    }
  },
  actions: {
    refreshPosts({commit}) {
      return new Promise((resolve) => {
        axios.get('/api/posts')
          .then(response => {
            commit('SET_POSTS', response.data)
            resolve(response)
          })
      })
    }
  }
}
