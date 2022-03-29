<template>
  <div class="home">
      <HacerPedido/>
      <Footer/>
  </div>
</template>

<script>

// @ is an alias to /src
import HacerPedido from "../components/HacerPedido.vue";
import Footer from "../components/Footer.vue";

export default {

  name: 'sabores',
  components:{
    HacerPedido,
    Footer,
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
