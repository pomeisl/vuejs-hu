import Vue from 'vue'
import PostsComponent from './PostsComponent'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(PostsComponent)
})
