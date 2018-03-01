import { HTTP } from './common'

export const ProductType = {
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
    return HTTP.get('/product_types/')
      .then(response => {
      return response.data
      })
      .catch(error => {
        console.log(`Product_types GET error: ${error}`)
      })
  }
}
