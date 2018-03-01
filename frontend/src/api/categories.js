import { HTTP } from './common'

export const Category = {
  create (categoryData) {
    return HTTP.post('/categories/', categoryData).then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
    })
  },
  // delete (product) {
  //   return HTTP.delete(`/products/${product.id}/`)
  // },
  list () {
    return HTTP.get('/categories/')
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(`Categories GET error: ${error}`)
      })
  }
}
