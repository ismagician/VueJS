<template>
  <div class="home">
      <Adornos/>
      <Footer/>
  </div>
</template>

<script>

// @ is an alias to /src
import Adornos from "../components/Adornos.vue";
import Footer from "../components/Footer.vue";

export default {

  name: 'sabores',
  components:{
    Adornos,
    Footer,
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
