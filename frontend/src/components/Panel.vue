<template>
  <div class="panel">
    <input class="form-control" placeholder="Product name..." v-model="productName"/>
    <router-link :to="{ path: 'search', query: { name: productName }}">
      <button class="btn btn-primary">Search</button>
    </router-link>
    <router-link to="add">
      <button class="btn btn-primary">Add product</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "panel",
    data () {
      return {
        'productName': ''
      }
    }
  }
</script>

<style scoped>
  .panel {
    border: 2px solid lightgrey;
    background-color: white;
    width: 600px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-columns: 55% auto auto;
    grid-column-gap: 15px;

    justify-content: center;
  }
  button {
    min-width: 100px;
  }
</style>
