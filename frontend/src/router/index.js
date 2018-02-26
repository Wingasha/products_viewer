import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductAdd from '@/components/ProductAdd'
import ProductList from '@/components/ProductList'

Vue.use(Router)

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
      component: ProductAdd
    }
  ]
})
