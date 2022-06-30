<template>
  <div class="">
    <h1>Buscar <span class="d-inline-block">
      <i class="fa-solid fa-street-view fa-2x"></i>
        <span class="d-inline-block">&nbsp;por <i><b>id</b></i></span>
      </span></h1>
    <div class="col-10 col-sm-5 col-md-4 col-lg-3 mx-auto">
      <div class="input-group mb-3">
        <input @keyup.enter="buscarPeleador(idSearch)" v-model="idSearch" type="text" class="form-control" placeholder="id"
               aria-label="id" aria-describedby="peleador" value="">
        <span @click.prevent="buscarPeleador(idSearch)" class="input-group-text btn" id="peleador"><i
            class="fas fa-search fa-2x"></i></span>
      </div>
    </div>

    <PeleadorVue :id="id" :nombre="nombre" :imgSrc="imgSrc" :idSearch="idSearch"
                 :encontrado="encontrado" :buscando="buscando"/>

  </div>
</template>

<script>
  import PeleadorVue from "@/components/PeleadorVue";

  export default {
    name: "buscadorView",
    components: {
      PeleadorVue
    },
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
      buscarPeleador(idSearch) {
        this.encontrado = false
        this.buscando = !!idSearch; // true si idsearch     false si !idsearch

        fetch('peleadores.json')
            .then((response) => response.json())
            .then((data) => {
              for (let i of data) {
                // console.log(i.id)
                // console.log(i.nombre)
                // console.log(i.imgSrc)
                if (idSearch === i.id) {
                  this.id = i.id
                  this.nombre = i.nombre
                  this.imgSrc = i.imgSrc
                  this.encontrado = true
                  this.buscando = false
                }
              }
            })
      },
    }
  }
</script>

<style scoped>

</style>