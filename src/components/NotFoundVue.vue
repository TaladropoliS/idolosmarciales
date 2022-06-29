<template>
  <div class="notfound p-5">
    <h1>La página que buscas ya no existe...<br>o nunca existió!</h1>
    <br>
    <router-link class="h4" to="/">Haz click aquí para volver al inicio, buena suerte!</router-link>
  </div>
</template>

<script>
  export default {
    name: "NotFoundVue"
  }
</script>

<style scoped>

</style>