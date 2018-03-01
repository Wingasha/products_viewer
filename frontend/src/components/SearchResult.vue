<template>
  <ul class="list">
    <div class="alert alert-success" role="alert">
        <h2>Result of search</h2>
    </div>

    <li v-bind:key="product.id" v-for="product in searchResult">
      <product-item :product="product"></product-item>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProductItem from './ProductItem'

  export default {
    name: "search-result",
    computed: {
      ...mapGetters(['products']),
      searchResult () {
        let productName = this.$route.query.name
        let type = parseInt(this.$route.query.type)
        let category = parseInt(this.$route.query.category)
        let result = [...this.products].filter(x => x.name.toLowerCase().includes(productName.toLowerCase()))
        if (type)
          result = result.filter(x => x.product_type === type)
        if (category)
          result = result.filter(x => x.category === category)
        return result
      }
    },
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
    },
  }
</script>

<style scoped>
  .list {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    list-style-type: none;
    padding: 0;
  }
</style>
