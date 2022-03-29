<template>
<router-view name="navigation"></router-view>
 <router-view/>
 
</template>

<script>

// @ is an alias to /src
import Index from "./components/Index.vue";

export default {

  name: 'HomeView',
  components:{
    Index,
    }

}

</script>
}


<style src="./assets/css/style.css">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a, router-link {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #dddddd;
}
</style>
