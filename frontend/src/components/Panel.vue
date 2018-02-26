<template>
  <div class="panel">
    <input class="form-control" placeholder="Search"/>
    <button class="btn btn-primary">Search</button>
    <router-link to="add">
      <button class="btn btn-primary">Add product</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "panel"
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
    grid-template-columns: 50% auto auto;
    grid-column-gap: 15px;
  }
</style>
