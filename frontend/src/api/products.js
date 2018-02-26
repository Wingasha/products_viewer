import { HTTP } from './common'

export const Product = {
  create (config) {
    return HTTP.post('/products/', config).then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
    })
  },
  delete (product) {
    return HTTP.delete(`/products/${product.id}/`)
  },
  list () {
    return HTTP.get('/products/').then(response => {
      return response.data
    })
  }
}
