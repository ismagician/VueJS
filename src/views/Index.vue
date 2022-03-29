<template>
  <div class="home">
      <Index/>
      <Footer/>
  </div>
</template>

<script>

// @ is an alias to /src
import Index from "../components/Index.vue";
import Footer from "../components/Footer.vue";

export default {

  name: 'inicio',
  components:{
    Index,
    Footer,
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
