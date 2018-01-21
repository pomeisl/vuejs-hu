class Action {
  promise(self, {method, url, data = {}}) {
    const options = {method, url, data}
    return new Promise((resolve, reject) => {
      self.$httpClient(options)
        .then(response => {
          resolve(response)
        })
        .catch((error) => {
          self.handleErrors({
            type: 'API',
            payload: error
          })
          reject(error)
        })
    })
  }
}

export default new Action()
