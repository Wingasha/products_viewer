<template>
  <div class="item block">
    <div>
      <strong>
        <h2>{{ product.name }}</h2>
      </strong>
    </div>
    <div><img class="product-img" :src="product.image"></div>
    <div class="options">
      <router-link :to="{path: `edit/${product.id}`}" :prop="product">
        <button type="button" class="btn btn-success">Edit</button>
      </router-link>
      <button type="button" class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
    </div>

    <div class="description">
      <strong>Category:</strong> {{  categoryName }} <br/>
      <strong>Type:</strong> {{ productTypeName }}<br/>
      <strong>Description:</strong> {{ product.description }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "product-item",
    props: ['product'],
    computed: {
      ...mapGetters(['categories', 'productTypes']),
      categoryName () {
        try {
          // Проблема: посколько данныые подгружаются асинхронно, то компонент рендерится раньше, чем данные подгружаются.
          // Поэтому this.categories === undefined и выпадает ошибка при вызове find. Как правильно решить - не знаю.
          // Так что просто обернул в try-catch.
          return [...this.categories].find(x => x.id === this.product.category).name
        } catch(err){
          console.log(err)
        }
      },
      productTypeName () {
        try {
          return [...this.productTypes].find(x => x.id === this.product.product_type).name
        } catch(err){
          console.log(err)
        }
      }
    },
    methods: {
      deleteProduct (product) {
        // Вызывает действие `deleteProduct` из хранилища, которое
        // попытается удалить продукт из  базы данных, отправив запрос к API
        this.$store.dispatch('deleteProduct', product)
      }
    }
  }
</script>

<style scoped>
  .item {
    display: grid;
    height: auto;
    grid-template-columns: 100%;
    grid-template-rows: auto minmax(200px, 300px) auto;
    margin-bottom: 10px;
    justify-items: stretch;
    grid-row-gap: 15px;
  }

  .description {
    text-align: justify;
  }

  .options button {
    min-width: 100px;
  }

</style>
