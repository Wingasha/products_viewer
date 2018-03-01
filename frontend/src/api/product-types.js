import { HTTP } from './common'

export const ProductType = {
  create (typeData) {
    return HTTP.post('/product_types/', typeData).then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
    })
  },
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
