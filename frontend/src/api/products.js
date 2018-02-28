/*
Модуль экспоортирует объект, который содержит функции, реализующие запросы к серверу для взаимодействия с таблицей
Product в БД
 */

import { HTTP } from './common'

export const Product = {
  create (productData) {
    return HTTP.post('/products/', productData)
      .then(response => {
      return response.data
      })
      .catch(error => {
      console.log(`Product POST error: ${error}`)
      })
  },
  delete (product) {
    return HTTP.delete(`/products/${product.id}/`)
      .catch(error => {
        console.log(`Product DELETE error: ${error}`)
      })
  },
  list () {
    return HTTP.get('/products/')
      .then(response => {
      return response.data
      })
      .catch(error => {
        console.log(`Product GET error: ${error}`)
      })
  },
  update (id, productData) {
    return HTTP.put(`/products/${id}/`, productData)
      .then(response => {
      return response.data
      })
      .catch(error => {
      console.log(`Product PUT error: ${error}`)
      })
  }
}
