<template>
  <div class="item">
    <div class="title">
      <strong>
        <h2>{{ product.name }}</h2>
      </strong>
      </div>
    <div class="img"><img :src="product.image"></div>
    <div class="options">
      <button type="button" class="btn btn-success">Edit</button>
      <button type="button" class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
    </div>

    <div class="description">
      <strong>Category:</strong> {{ product.category}} <br/>
      <strong>Type:</strong> {{ product.product_type }}<br/>
      <strong>Description:</strong> {{ product.description }}
    </div>
  </div>
</template>

<script>

  export default {
      name: "product-item",
      props: ['product'],
      methods: {
        deleteProduct (product) {
          // Вызываем действие `deleteProduct` из нашего хранилища, которое
          // попытается удалить продукт из нашей базы данных, отправив запрос к API
          this.$store.dispatch('deleteProduct', product)
        }
      }
  }
</script>

<style scoped>
  .item {
    display: grid;
    height: auto;
    width: 600px;
    grid-template-columns: 100%;
    grid-template-rows: auto minmax(200px, 300px) auto;
    border: 2px solid lightgrey;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
    justify-items: stretch;
    grid-row-gap: 15px;
  }

  .item:hover {
    box-shadow:0 0 13px 0 rgba(0,0,0,.4)
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


  .description {
    text-align: justify;
    margin: 10px;
  }

  .title {
    margin: 10px;
  }

  .options {
    margin-left: 10px;
  }

  .options button {
    min-width: 100px;
  }



</style>
