<template>
  <div id="app">
    <nav>
      <router-link class="text-decoration-none d-inline-block me-1 me-sm-2 me-md-5"
                   to="/"><i class="fa-solid fa-user-ninja"></i> Peleadores
      </router-link>
      <router-link class="text-decoration-none d-inline-block me-1 me-sm-2 me-md-5"
                   to="/buscadorrouter"><i class="fas fa-search"></i> Router
      </router-link>
      <router-link class="text-decoration-none d-inline-block"
                   to="/buscador"><i class="fas fa-search"></i> Simple
      </router-link>
    </nav>

    <div class="container card p-5 mb-5">
      <router-view/>
    </div>

    <FooterVue :yearActual="yearActual"/>

  </div>
</template>

<script>
  import FooterVue from "@/components/FooterVue";

  export default {
    components: {
      FooterVue
    },
    data() {
      return {
        yearActual: ''
      }
    },
    methods: {
      buscarYearActual() {
        const fecha = new Date()
        this.yearActual = fecha.getFullYear()
      }
    },
    created() {
      this.buscarYearActual()
    }
  }
</script>

<style lang="scss">
.container{
  min-height: 75vh !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>