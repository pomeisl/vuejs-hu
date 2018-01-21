<template lang="pug">
  sub-component(:posts="posts")
</template>

<script>
import ajaxMixin from './ajax-mixin'
import SubComponent from './SubComponent'

export default {
  name: 'container',
  components: { SubComponent },
  mixins: [ ajaxMixin ],
  data() {
    return {
      posts: []
    }
  },
  created () {
    this.refreshPosts(response => {
      this.posts = response.data
    })
  }
}
</script>

<style lang="css">
</style>
