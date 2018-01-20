import Vue from 'vue'
import axios from 'axios'
import App from './App'

Vue.component('App', App)

new Vue({
  el: '#app',
  template: '<App :posts="posts" @refreshPosts="refreshPosts" />',
  data: {
    posts: []
  },
  methods: {
    refreshPosts() {
      axios.get('/api/posts')
        .then(response => {
          this.posts = response.data
        })
    }
  }
})
