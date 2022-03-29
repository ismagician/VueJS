<template>
  <div class="home">
      <InvAdorno/>
      <Footer/>
  </div>
</template>

<script>

// @ is an alias to /src
import InvAdorno from "../components/InvAdorno.vue";
import Footer from "../components/Footer.vue";

export default {

  name: 'inicio',
  components:{
    InvAdorno,
    Footer,
    }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>