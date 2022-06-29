<template>
  <div>

    <div v-if="encontrado" class="card bg-black text-light">
      <div class="card-title pt-3">
        <h3><b>{{ nombre }}</b></h3>
        <p><i>id:</i> {{ id }}</p>
      </div>
      <div class="card-img pb-3">
        <img :src="imgSrc" class="img-fluid rounded-3" :alt="nombre">
      </div>
    </div>
    <div v-if="buscando && !encontrado" class="card bg-black text-light pb-3">
      <h4 class="pt-5">El peleador que buscas no existe</h4>
      <i class="fa-solid fa-face-sad-tear fa-4x"></i>
    </div>

  </div>
</template>

<script>
  export default {
    name: "PeleadorVue",
    props: {
      id: String,
      nombre: String,
      imgSrc: String,
      idSearch: String,
      encontrado: Boolean,
      buscando: Boolean,
    }
  }
</script>

<style scoped>

</style>