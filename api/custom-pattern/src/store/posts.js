import {MainRequester} from '@/services'

const SET_POSTS = 'SET_POSTS'

export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    [SET_POSTS](state, payload) {
      state.posts = payload
    }
  },
  actions: {
    refreshPosts({commit}) {
      return new Promise((resolve) => {
        MainRequester.Posts('list', {})
          .then(response => {
            commit(SET_POSTS, response.data)
            resolve(response)
          })
      })
    }
  }
}
