<template>
  <ul class="list">
  <li v-bind:key="product.id" v-for="product in products">
    <product-item :product="product"></product-item>
  </li>
 </ul>
 </template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem'

export default {
  name: 'product-list',
  computed: mapGetters(['products']),
  components: {
    'product-item': ProductItem
  },
  beforeMount () {
    // Перед тем как загрузить страницу, нам нужно получить список всех
    // имеющихся продуктов. Для этого мы вызываем действие `getProducts` из
    // нашего хранилища
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCategories')

  }
}
</script>


<style>
  .list {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    list-style-type: none;
    padding: 0;
  }

</style>
