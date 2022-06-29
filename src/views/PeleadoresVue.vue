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
                 :to="irAPeleador(p.id)">
      <h3>{{ p.nombre }}</h3>
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
    mounted() {
      this.llamarListaPeleadores();
    }
  }
</script>

<style scoped>

</style>