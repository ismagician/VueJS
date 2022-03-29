<template>
  <div class="home">
      <InvSabor/>
      <Footer/>
  </div>
</template>

<script>

// @ is an alias to /src
import InvSabor from "../components/InvSabor.vue";
import Footer from "../components/Footer.vue";

export default {

  name: 'inicio',
  components:{
    InvSabor,
    Footer,
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="">

</style>