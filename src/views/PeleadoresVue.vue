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

    <!--                 :to="{name:'peleador', id:p.id}"-->
    <router-link v-for="(p, index) in listaPeleadores" :key="index"
                 :to="`/peleador/${p.id}`" v-model="id">
      <h3>{{ p.nombre }}</h3>
    </router-link>


  </div>
</template>

<script>
  import PeleadorRouterVue from "@/components/PeleadorRouterVue";

  export default {
    name: "PeleadoresVue",
    components: {
      PeleadorRouterVue
    },
    data() {
      return {
        id: '',
        nombre: '',
        imgSrc: '',
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
      },
      buscarPeleador(id) {
        fetch('peleadores.json')
            .then((response) => response.json())
            .then((data) => {
              for (let i of data) {
                if (id === i.id) {
                  this.id = i.id
                  this.nombre = i.nombre
                  this.imgSrc = i.imgSrc
                }
              }
            })
      },
    },
    created() {
      this.llamarListaPeleadores(this.$route.params.id);
      this.buscarPeleador(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>