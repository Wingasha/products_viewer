<template>
  <div class="item">
    <div class="title">
      <strong>
        <h2>{{ product.name }}</h2>
      </strong>
      </div>
    <div class="img"><img :src="product.image_url"></div>
    <div class="options">
      <button type="button" class="btn btn-success">Edit</button>
      <button type="button" class="btn btn-success">Delete</button>
    </div>

    <div class="description">
      <strong>Category:</strong> {{ product.category.name }} <br/>
      <strong>Type:</strong> {{ product.product_type.name }}<br/>
      <strong>Description:</strong> {{ product.description }}
    </div>
  </div>
</template>

<script>
    export default {
        name: "product-item",
        props: ['product']
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

  img {
    min-width: 250px;
    min-height: 150px;
    max-width: 500px;
    max-height: 300px;
  }

  .img {
     justify-self: center;
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
