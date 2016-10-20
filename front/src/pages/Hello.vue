<template lang="pug">
  main-layout  
    div(class="hello") 
      div This is test #1 of the thing
      p {{ this.store.x }}
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    components: {
      MainLayout
    },
    data () {
      return {
        store: MainLayout.data()
        //msg: 'Hello Vue!'
        //x: this.store.x
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
