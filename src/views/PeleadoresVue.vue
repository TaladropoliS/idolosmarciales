<template>
  <div class="">
    <h1>Peleadores
      <i class="fa-solid fa-people-group fa-2x"></i>
    </h1>
    <div class="col-10 col-sm-5 col-md-4 col-lg-3 mx-auto">
      <div class="input-group mb-3">
        <!--        <router-link to=""-->
      </div>
    </div>

    <router-link v-for="(p, index) in listaPeleadores" :key="index"
                 :to="irAPeleador(p.id)" class="d-flex justify-content-center text-decoration-none text-success">
      <p>{{ p.nombre }}</p>
      <img :src="p.imgSrc" :alt="p.nombre" class="img-fluid ms-3">
    </router-link>


  </div>
</template>

<script>

  export default {
    name: "PeleadoresVue",
    data() {
      return {
        listaPeleadores: [],
      }
    },
    methods: {
      irAPeleador(pk) {
        return `/peleador/${pk}`
      },
      llamarListaPeleadores() {
        fetch('../peleadores.json')
            .then((response) => response.json())
            .then((data) => {
              for (let i of data) {
                this.listaPeleadores.push(i)
              }
            })
      },
    },
    created() {
      this.llamarListaPeleadores();
    }
  }
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
  border-radius: 50%
}
</style>