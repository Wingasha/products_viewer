import Vue from 'vue'
import Router from 'vue-router'
import ProductSetup from '@/components/ProductSetup'
import ProductList from '@/components/ProductList'

Vue.use(Router)

// ProductSetup - компонент для добавления/редактирования продукта
// ProductList - компонент для отображения списка продуктов

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/add',
      name: 'ProductAdd',
      component: ProductSetup
    },
    { path: '/edit/:id',
      name: 'ProductEdit',
      component: ProductSetup,
      props: true
    },
  ]
})
