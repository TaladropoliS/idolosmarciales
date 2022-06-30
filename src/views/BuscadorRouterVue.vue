<template>
  <div class="">
    <h1>Buscar <span class="d-inline-block">
      <i class="fa-solid fa-street-view fa-2x"></i>
        <span class="d-inline-block">&nbsp;por <i><b>id</b></i></span>
      </span></h1>
    <div class="col-10 col-sm-5 col-md-4 col-lg-3 mx-auto">
      <div class="input-group mb-3">
        <input v-model="idSearch" type="text" class="form-control" placeholder="id"
               aria-label="id" aria-describedby="peleador" value="">
        <span @click.prevent="crearLink(idSearch)" class="input-group-text btn" id="peleador">
          <router-link :to="irAPeleador(idSearch)">
          <i class="fas fa-search fa-2x"></i>
              </router-link>
        </span>
      </div>
    </div>

    <router-view/>

  </div>
</template>

<script>

  export default {
    name: "buscadorRouterVue",
    data() {
      return {
        idSearch: '',
        pk: '',
      }
    },
    methods: {
      crearLink(idSearch) {
        // console.log(this.idSearch)
        this.irAPeleador(idSearch)
      },
      irAPeleador(pk) {
        // console.log(pk)
        return `/peleador/${pk}`
      },
    },
  }
</script>

<style scoped>

</style>