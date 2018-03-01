<template>
  <form class="formProduct" @submit="submitForm">
    <h3>Add the product</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" required="true">
    </div>
    <div class="form-group">
      <label for="categorySelect">Category</label>
      <select class="form-control" v-model="category" id="categorySelect" required="true">
        <option v-bind:key="category.id" v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="typeSelect">Type</label>
      <select class="form-control" v-model="product_type" id="typeSelect" required="true">
        <option v-bind:key="type.id" v-for="type in productTypes" v-bind:value="type.id">{{ type.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <img :src="image"/>
    </div>
    <div class="form-group">
      <label for="image">Photo</label>
      <input type="file" class="form-control-file" id="image" @change="processFile($event)">
    </div>
    <div class="form-group">
      <label for="Description">Description</label>
      <textarea class="form-control" id="Description" rows="5" v-model="description"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <router-link to="/">
      <button class="btn btn-primary">Cancel</button>
    </router-link>
  </form>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { utils }  from '../utils'


  export default {
    name: "product-add",
    computed: {
      ...mapGetters(['categories', 'productTypes', 'products']),
    },
    data () {
      return {
        'name': '',
        'category': '',
        'product_type': '',
        'image': '',
        'description': '',
      }
    },
    beforeMount () {
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getProductTypes')
    },
    methods: {
      submitForm (event) {
        this.createProduct()
        event.preventDefault()
      },
      createProduct () {
        // Вызывает действие `createProduct` из хранилища, которое отправит запрос на создание нового продукта к API.
        // Также приходится передать this.$router, так как требуется, чтобы сервер сохранил запись в БД, прежде, чем
        // произойдёт перенавравление на главную страницу, которая в свою очередь подгружает записи из БД
        this.$store.dispatch('createProduct',{
          productData: { name: this.name,
            product_type: this.product_type,
            category: this.category,
            image: this.image,
            description: this.description
          },
          router: this.$router
        })

      },
      processFile(event) {
        // Вызываем функцию, которая кодирует изображение из поля `type="file"` в base64
        utils.imageToBase64(event.target.files[0], (error, result) => {
          // В функции обратного вызова записываем закодировано изображение в `this.image` иили выводим ошибку
          if (error) {
            console.log('Image encode error: ', error)
            return
          }
          this.image = result
        })
      }
    }
  }
</script>

<style scoped>
  .formProduct{
    border: 2px solid lightgrey;
    background-color: white;
    width: 600px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }

  img {
    min-width: 250px;
    min-height: 150px;
    max-width: 500px;
    max-height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto
  }
</style>
