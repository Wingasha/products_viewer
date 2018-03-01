<template>
  <form class="block" @submit="submitForm">
    <h3>Edit the product</h3>
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
      <img class="product-img" :src="image"/>
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
    name: "product-edit",
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
        'oldImage': ''
      }
    },
    props: ['id'],
    created () {
      let product = [...this.products].find(x => x.id == this.id)
      this.name = product.name
      this.category = product.category
      this.product_type = product.product_type
      this.image = product.image
      this.description = product.description
      this.oldImage = this.image
    },
    beforeMount () {
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getProductTypes')
    },
    methods: {
      submitForm (event) {
        this.updateProduct()
        event.preventDefault()
      },
      updateProduct () {
        // Вызывает действие `updateProduct` из хранилища, которое отправит запрос на создание нового продукта к API.
        // Есть нюанс - не знаю как url изображения (не из поля type="file") кодировать в base64.
        // Так, что приходится хранить в переменной `this.oldImage` изначальное изображение редактируемого продукта,
        // дабы не отправить его в запросе и не получить ошибку 400
        let data = {
          id: this.id,
          productData: {
            name: this.name,
            product_type: this.product_type,
            category: this.category,
            description: this.description
          },
          router: this.$router
        }

        if (this.oldImage !== this.image) {
          // Если загружено новое изображение - добвать его в данные для запроса
          data.productData.image = this.image
        }

        this.$store.dispatch('updateProduct', data)

      },
      processFile(event) {
        // Кодирует изображение из поля `type="file"` в base64
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

</style>
