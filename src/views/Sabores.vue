<template>
  <div class="home">
      <Sabores/>
      <Footer/>
  </div>
</template>

<script>

// @ is an alias to /src
import Sabores from "../components/Sabores.vue";
import Footer from "../components/Footer.vue";

export default {

  name: 'sabores',
  components:{
    Sabores,
    Footer,
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="">

</style>
