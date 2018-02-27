import { HTTP } from './common'

export const Category = {
  // create (config) {
  //   return HTTP.post('/products/', config).then(response => {
  //     return response.data
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // },
  // delete (product) {
  //   return HTTP.delete(`/products/${product.id}/`)
  // },
  list () {
    return HTTP.get('/categories/').then(response => {
      return response.data
    })
  }
}
