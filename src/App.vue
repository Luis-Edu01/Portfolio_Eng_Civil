<template>
  <div class="app-layout">
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
  import Footer from './components/Footer.vue'
</script>

<style>
html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: none;
}
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
