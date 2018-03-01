<template>
  <div id="app">
    <custom-menu></custom-menu>
    <panel></panel>
    <router-view/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import Panel from './components/Panel'
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    'product-list': ProductList,
    'panel': Panel,
    'custom-menu': Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 800px;
  grid-template-rows: auto auto auto;
  grid-row-gap: 15px;
  justify-items: center;

}
</style>
