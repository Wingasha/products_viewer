<template>
  <div id="app">
    <panel></panel>
    <router-view/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import Panel from './components/Panel'

export default {
  name: 'App',
  components: {
    'product-list': ProductList,
    'panel': Panel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: #edeef0;

}
</style>
