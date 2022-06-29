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
        id: '',
        nombre: '',
        imgSrc: '',
        idSearch: '',
        encontrado: false,
        buscando: false,
      }
    },
    methods: {
      // buscarPeleador(idSearch) {
      //   this.encontrado = false
      //   this.buscando = !!idSearch; // true si idsearch     false si !idsearch
      //
      //   fetch('peleadores.json')
      //       .then((response) => response.json())
      //       .then((data) => {
      //         for (let i of data) {
      //           console.log(i.id)
      //           console.log(i.nombre)
      //           console.log(i.imgSrc)
      //           if (idSearch === i.id) {
      //             this.id = i.id
      //             this.nombre = i.nombre
      //             this.imgSrc = i.imgSrc
      //             this.encontrado = true
      //             this.buscando = false
      //           }
      //         }
      //       })
      // },
    },
    // computed: {
    //   LlamarBuscarPeleador() {
    //     this.buscarPeleador(this.$route.params.id)
    //   }
    // }
  }
</script>

<style scoped>

</style>