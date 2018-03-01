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
      // Перед тем как загрузить страницу, нужно получить список всех
      // имеющихся продуктов, категорий и типов. Для этого вызываются действия из хранилища
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getProductTypes')
      // После возвращения с компонента добавления/редактирования подняться в верх списка
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
</script>


<style>
  .list {
    list-style-type: none;
    padding: 0;
  }

</style>
