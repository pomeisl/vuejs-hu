import AbstractInterface from '@/services/AbstractInterface'
import {posts, POSTS_METHOD_NAME} from './actions/posts'

class Posts extends AbstractInterface {

  constructor() {
    super()
  }

  handler(action, params) {
    const ref = new Posts()
    switch (action) {
    case POSTS_METHOD_NAME:
      return posts(ref, params)
    default:
      return new Error('Unknown action.', ref.constructor.name)
    }
  }
}

export default new Posts()
