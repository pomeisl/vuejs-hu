import axios from 'axios'

export default class AbstractInterface {

  constructor() {
    this.$httpClient = axios.create({
      baseURL: '/api',
      headers: {}
    })
  }

  handleErrors(error) {
    switch (error.type) {
    case 'API':
      console.error('[ERROR]', error.payload) // eslint-disable-line
      break
    default:
      console.log('Unknown error type: ', error.type) // eslint-disable-line
    }
  }

  handler() {
    throw new Error('Not implemented yet.')
  }

}
