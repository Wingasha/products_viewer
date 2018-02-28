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
        console.log("TYPE ", this.$route.query.type)
        console.log("CATEGORY ",this.$route.query.category)
        let productName = this.$route.query.name
        let type = parseInt(this.$route.query.type)
        let category = parseInt(this.$route.query.category)
        // let type = [...this.productTypes].find(x => x.id === this.$route.query.type).name
        // let category =  [...this.categories].find(x => x.id === this.$route.query.category).name
        let result = [...this.products].filter(x => x.name.toLowerCase().includes(productName.toLowerCase()))
        console.log(result)
        let test = result.map(x => console.log("Jbkect in res", x ))
        console.log(result[0].name, result[0].product_type)
        console.log("TYPE ", type)
        console.log("CATEGORY ", category)
        if (type)
          result = result.filter(x => x.product_type === type)
        console.log(result)
        if (category)
          result = result.filter(x => x.category === category)
        console.log(result)
        return result
      }
    },
    components: {
      'product-item': ProductItem
    },
    beforeMount () {

      // Перед тем как загрузить страницу, нужно получить список всех
      // имеющихся продуктов, категорий и типов. Для этого вызываются действия из хранилища
      console.log('beforeMount')
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getProductTypes')
      console.log('afterMount')

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
