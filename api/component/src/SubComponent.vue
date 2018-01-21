<template lang="pug">
  div
    div(v-if="posts")
      ul
        li(v-for="post in posts") {{ post.title }} - {{ post.author }}
    div(v-if="!posts.length") Loading...
</template>

<script>
export default {
  name: 'sub-component',
  props: ['posts']
}
</script>

<style lang="css">
</style>
