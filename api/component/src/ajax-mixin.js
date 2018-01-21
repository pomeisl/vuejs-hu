import axios from 'axios'

export default {
  methods: {
    refreshPosts(callback) {
      axios.get('/api/posts')
        .then(response => {
          callback(response)
        })
    }
  }
}
