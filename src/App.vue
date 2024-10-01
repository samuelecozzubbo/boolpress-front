<script>
//con l'export default esporto senza graffe
//se l'esxport è non default metto le graffe(destrutturazione oggetto)
import Navbar from './components/partials/Navbar.vue';

  export default{
    components:{
      Navbar
    }
  }
</script>

<template>
 <div class="container">
  <Navbar/>
  <router-view>

  </router-view>
 </div>
</template>

<style lang="scss" scoped>

</style>
