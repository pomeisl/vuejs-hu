import Action from '@/services/Action'

export const POSTS_METHOD_NAME = 'list'

export const posts = (self, params = {}) => {
  return Action.promise(self, {method: 'GET', url: '/posts', data: params})
}
