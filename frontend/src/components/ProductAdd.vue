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

  export default {
    name: "product-add",
    computed: {
      ...mapGetters(['categories', 'productTypes']),
    },
    beforeMount () {
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getProductTypes')
    },
    data () {
      return {
        'name': '',
        'category': '',
        'product_type': '',
        'image': '',
        'description': ''
      }
    },
    methods: {
      submitForm (event) {
        this.createProduct()
        // preventDefault нужно для того, чтобы страница
        // не перезагружалась после нажатия кнопки submit
        event.preventDefault()
      },
      createProduct () {
        // Вызываем действие `createNote` из хранилища, которое
        // отправит запрос на создание новой заметки к нашему API.
        console.log('In create ' + this.image)
        this.$router.push('/')
        this.$store.dispatch('createProduct',
          { name: this.name,
            product_type: this.product_type,
            category: this.category,
            image: this.image,
            description: this.description
          })

      },
      processFile(event) {
        console.log(event.target.files[0])
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          this.image = reader.result
          console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
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
