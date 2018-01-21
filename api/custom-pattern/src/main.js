import Vue from 'vue'
import PostsComponent from './PostsComponent'
import store from './store'
import {MainRequester} from '@/services'

Vue.prototype.$MainRequester = MainRequester

new Vue({
  el: '#app',
  store,
  render: h => h(PostsComponent)
})
