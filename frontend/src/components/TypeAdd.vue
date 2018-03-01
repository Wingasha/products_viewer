<template>
  <form class="formAdd" @submit="submitForm">
    <h3>Add the type</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" required="true">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <router-link to="/">
      <button class="btn btn-primary">Cancel</button>
    </router-link>
  </form>
</template>

<script>
  export default {
    name: "type-add",
    data () {
      return {
        'name': ''
      }
    },
    methods: {
      submitForm (event) {
        this.createProductType()
        event.preventDefault()
      },
      createProductType () {
        // Вызывает действие `createProduct` из хранилища, которое отправит запрос на создание нового продукта к API.
        // Также приходится передать this.$router, так как требуется, чтобы сервер сохранил запись в БД, прежде, чем
        // произойдёт перенавравление на главную страницу, которая в свою очередь подгружает записи из БД
        this.$store.dispatch('createProductType',{
          typeData: { name: this.name },
          router: this.$router
        })

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
  }
</style>
