import Vue from 'vue'
import Vuex from 'vuex'
import { Product } from '../api/products'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCTS
} from './mutation-types.js'

Vue.use(Vuex)

// Состояние
const state = {
  products: [] // список заметок
}

// Геттеры
const getters = {
  products: state => state.products // получаем список заметок из состояния
}

// Мутации
const mutations = {
  // Добавляем продукт в список
  [ADD_PRODUCT] (state, product) {
    state.products = [product, ...state.products]
  },
  // Убираем продукт из списка
  [REMOVE_PRODUCT] (state, { id }) {
    state.products = state.products.filter(product => {
      return product.id !== id
    })
  },
  // Задаем список продуктов
  [SET_PRODUCTS] (state, { products }) {
    state.products = products
  }
}

// Действия
const actions = {
  // createProduct ({ commit }, productData) {
  //   Product.create(productData).then(product => {
  //     commit(ADD_PRODUCT, product)
  //   })
  // },
  deleteProduct ({ commit }, product) {
    Product.delete(product).then(response => {
      commit(REMOVE_PRODUCT, product)
    })
  },
  getProducts ({ commit }) {
    Product.list().then(products => {
      commit(SET_PRODUCTS, { products })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
