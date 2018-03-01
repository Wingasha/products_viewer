<template>
  <form class="block" @submit="submitForm">
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
        this.$store.dispatch('createProductType',{
          typeData: { name: this.name },
          router: this.$router
        })
      }
    }
  }
</script>

<style scoped>

</style>
