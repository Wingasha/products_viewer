<template>
  <div class="panel block">
    <label for="name">Name</label>
    <input id="name" class="form-control" placeholder="Product name..." v-model="productName"/>

    <label for="categorySelect">Category</label>
    <select class="form-control" v-model="category" id="categorySelect">
      <option value="" disabled selected>Select category</option>
      <option>All</option>
      <option v-bind:key="category.id" v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
    </select>

    <label for="typeSelect">Type</label>
    <select class="form-control" v-model="type" id="typeSelect">
      <option value="" disabled selected>Select type</option>
      <option>All</option>
      <option v-bind:key="type.id" v-for="type in productTypes" v-bind:value="type.id">{{ type.name }}</option>
    </select>

    <router-link id="search" :to="{ path: 'search', query: { name: productName, category: category, type: type }}">
      <button  class="btn btn-primary">Search</button>
    </router-link>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "panel",
    data () {
      return {
        'productName': '',
        'category': '',
        'type': ''
      }
    },
    computed: {
      ...mapGetters(['categories', 'productTypes', 'products']),
    }
  }
</script>

<style scoped>
  .panel {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
    align-items: center;
  }

  #search {
    grid-column: 2;
    justify-self: end;
  }

</style>
