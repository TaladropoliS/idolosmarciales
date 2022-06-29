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
                 :to="p.id"><h3>{{ p.nombre }}</h3></router-link>

    <router-view>
      <PeleadorVue :id="id" :nombre="nombre" :imgSrc="imgSrc" :idSearch="idSearch"
                   :encontrado="encontrado" :buscando="buscando"/>
    </router-view>

  </div>
</template>

<script>
  import PeleadorVue from "@/components/PeleadorVue";

  export default {
    name: "PeleadoresVue",
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
        listaPeleadores: [],
      }
    },
    methods: {
      llamarListaPeleadores() {
        fetch('../peleadores.json')
            .then((response) => response.json())
            .then((data) => {
              for (let i of data) {
                this.listaPeleadores.push(i)
              }
            })
        console.log(this.listaPeleadores)
      },
      buscarPeleador(idSearch) {
        this.encontrado = false
        this.buscando = !!idSearch; // true si idsearch     false si !idsearch

        fetch('peleadores.json')
            .then((response) => response.json())
            .then((data) => {
              for (let i of data) {
                console.log(i.id)
                console.log(i.nombre)
                console.log(i.imgSrc)
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
    },
    created() {
      this.llamarListaPeleadores();
      this.buscarPeleador(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>