<template>
  <div class="bg-black text-secondary text-center py-5">
    Fernando Taladriz 1970 &copy; {{ yearActual }}
  </div>
</template>

<script>
  export default {
    name: "FooterVue",
    props: {
      yearActual: Number
    }
  }
</script>

<style scoped>
*{
  font-size: 13px;
}
</style>