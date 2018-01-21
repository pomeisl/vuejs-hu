<template lang="pug">
  div
    div(v-if="posts")
      ul
        li(v-for="post in posts") {{ post.title }} - {{ post.author }}
    div(v-if="!posts.length") Loading...
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'posts-component',
  created () {
    this.refreshPosts()
  },
  methods: {
    ...mapActions('posts', ['refreshPosts'])
  },
  computed: {
    ...mapState('posts', ['posts'])
  }
}
</script>

<style lang="css">
</style>
