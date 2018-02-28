/*
Реализация хранилища с помощью Vuex
 */


import Vue from 'vue'
import Vuex from 'vuex'
import { Product } from '../api/products'
import { Category } from "../api/categories";
import { ProductType } from "../api/product-types";

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
  SET_CATEGORIES,
  SET_PRODUCT_TYPES
} from './mutation-types.js'

Vue.use(Vuex)

// Состояние
const state = {
  products: [], // список заметок
  categories: [],
  productTypes: []
}

// Геттеры
const getters = {
  products: state => state.products,
  categories: state => state.categories,
  productTypes: state => state.productTypes
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
    state.products = products.reverse()
  },
  // Задаем список категорий
  [SET_CATEGORIES] (state, { categories }) {
    state.categories = categories
  },
  // Задаем список типов
  [SET_PRODUCT_TYPES] (state, { productTypes }) {
    state.productTypes = productTypes
  }
}

// Действия. Вызывают функции, выполняющие ajаx запросы, а после обновляют состояние списков
const actions = {
  createProduct ({ commit }, { productData, router }) {
    Product.create(productData).then(product => {
      commit(ADD_PRODUCT, product)
      router.push('/')
    })
  },
  deleteProduct ({ commit }, product) {
    Product.delete(product).then(response => {
      commit(REMOVE_PRODUCT, product)
    })
  },
  getProducts ({ commit }) {
    console.log('getProducts: ')
    Product.list().then(products => {
      commit(SET_PRODUCTS, { products })
    })
  },
  updateProduct ({ commit }, { id, productData, router }) {
    // При
    Product.update(id, productData).then(product => {
      console.log('Update: ', product)
      router.push('/')
    })
  },
  getCategories ({ commit }) {
    console.log('getCategories: ')
    Category.list().then(categories => {
      commit(SET_CATEGORIES, { categories })
    })
  },
  getProductTypes ({ commit }) {
    console.log('getProductTypes: ')
    ProductType.list().then(productTypes => {
      commit(SET_PRODUCT_TYPES, { productTypes })
    })
  },

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
