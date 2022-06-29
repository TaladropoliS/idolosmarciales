<template>
  <div>

    <div class="card bg-black text-light">
      <div class="card-title pt-3">
        <h3><b>{{ nombre }}</b></h3>
        <p><i>id:</i> {{ id }}</p>
      </div>
      <div class="card-img pb-3">
        <img :src="imgSrc" class="img-fluid rounded-3" :alt="nombre">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "PeleadorRouterVue",
    data() {
      return {
        id: String,
        nombre: String,
        imgSrc: String
      }
    },
    methods: {
      buscarPeleador(idP) {
        fetch('../peleadores.json')
            .then((response) => response.json())
            .then((data) => {
              for (let i of data) {
                // console.log(i.id)
                // console.log(i.nombre)
                // console.log(i.imgSrc)
                if (idP === i.id) {
                  this.id = i.id
                  this.nombre = i.nombre
                  this.imgSrc = i.imgSrc
                }
              }
            })
      }
    },
    created() {
      console.log(this.$route.params.id)
      let idP = this.$route.params.id
      this.buscarPeleador(idP)
    }
  }
</script>

<style scoped>

</style>