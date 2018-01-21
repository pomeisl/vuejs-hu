import AbstractInterface from '@/services/AbstractInterface'
import {posts, POSTS_METHOD_NAME} from './actions/posts'

class Posts extends AbstractInterface {

  constructor() {
    super()
  }

  handler(actionType, payload = {}) {
    const ref = new Posts()
    switch (actionType) {
    case POSTS_METHOD_NAME:
      return posts(ref, payload.params)
    default:
      return new Error('Unknown error type', ref.constructor.name)
    }
  }
}

export default new Posts()
