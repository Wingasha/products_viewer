import Vue from 'vue'
import Router from 'vue-router'
import ProductAdd from '@/components/ProductAdd'
import ProductEdit from '@/components/ProductEdit'
import ProductList from '@/components/ProductList'
import SearchResult from '@/components/SearchResult'
import PageNotFound from '@/components/PageNotFound'
import CategoryAdd from '@/components/CategoryAdd'
import TypeAdd from '@/components/TypeAdd'

Vue.use(Router)

// ProductAdd - компонент для добавления продукта
// ProductEdit - компонент для редактирования продукта
// ProductList - компонент для отображения списка продуктов
// SearchResult - компонент для отображения результатов поиска
// PageNotFound - компонент для обработки несуществующего адреса

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/edit/:id',
      name: 'ProductEdit',
      component: ProductEdit,
      props: true
    },
    {
      path: '/search',
      name: 'ProductSearch',
      component: SearchResult,
      props: true
    },
    {
      path: '/add_category',
      name: 'CategoryAdd',
      component: CategoryAdd
    },
    {
      path: '/add_type',
      name: 'TypeAdd',
      component: TypeAdd
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})
