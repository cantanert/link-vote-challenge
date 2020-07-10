<template>
  <div id="app" class="container">
    <Header/>
    <router-view/>
  </div>
</template>


<script>
  import Header from "./components/Header";

  export default {
    name: "Listing",
    components:{
      Header
    }
  }
</script>

<style lang="sass">
  @import "styles/main"
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 25px

</style>
