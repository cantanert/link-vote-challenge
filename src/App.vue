<template>
  <div id="app" class="container">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
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
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 25px

</style>
