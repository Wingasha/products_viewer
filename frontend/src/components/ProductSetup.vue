<template>
  <form class="formAdd" @submit="submitForm">
    <h3>Add a product</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model="name">
    </div>
    <div class="form-group">
      <label for="categorySelect">Category</label>
      <select class="form-control" v-model="category" id="categorySelect">
        <option v-bind:key="category.id" v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
      </select>
      <!--<input type="text" class="form-control" id="category" v-model="category" hidden>-->
    </div>
    <div class="form-group">
      <label for="typeSelect">Category</label>
      <select class="form-control" v-model="product_type" id="typeSelect">
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

  // Поскольку компоненты для добавления и редактирования продукта похожи, они были соеденены в один компонент

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
        'oldImage': ''
      }
    },
    props: ['id'],
    created () {
      // Проверяется для чего был вызван компонент:
      // 1) редактирование существующего продукта: в этом случае будет передан параметр id через путь '/edit/:id'
      // 2) создание нового продукта: в этом случае код из блока if пропускается
      if (this.id) {
        console.log(this.id)
        console.log(this.products)
        let product = [...this.products].find(x => x.id == this.id)

        console.log(this.product)
        this.name = product.name
        this.category = product.category
        this.product_type = product.product_type
        this.image = product.image
        this.description = product.description
        this.oldImage = this.image
      }
    },
    beforeMount () {
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getProductTypes')
    },
    methods: {
      submitForm (event) {
        // Опять же, если передан id - значит редактируем существующий продукт, нет - создаём
        if (this.id){
          this.updateProduct()
        }
        else{
          this.createProduct()
        }

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
      updateProduct () {
        // Вызывает действие `updateProduct` из хранилища, которое отправит запрос на создание нового продукта к API.
        // Тоже, что и в методе `createProduct`, но есть нюанс - не знаю как url изображения кодировать в base64.
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
        console.log(event.target.files[0].name)
        let reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
          this.image = reader.result
        };
        reader.onerror = function (error) {
          console.log('Error: ', error)
        };
      }

    }
  }
</script>

<style scoped>
  .formAdd{
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
