<template>
  <header>
    <div class="header">

      <div class="texto-header">
        <h1>teste</h1>
      </div>
    </div>
  </header>

  <div class="button">
    <router-link to="/">
      <button class="button-home">Home</button>
    </router-link>

    <router-link to="/Projetos">
      <button class="button-projetos">Projetos</button>
    </router-link>

    <router-link to="/Contato">
      <button class="button-contato">Contato</button>
    </router-link>
  </div>
</template>
<script>
    export default {
    name: 'NavbarAlternativo'
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* HEADER COM VÍDEO */
header {
  width: 100vw;
  height: 25vh;
  background-color: #CBBBA0;
}


.texto-header {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.texto-header h1 {
  color: #000000;
}

/* BOTÕES */
.button {
  text-align: center;
  padding: 8px;
  background-color: #CBBBA0;
}

.button-home,
.button-projetos,
.button-contato {
  margin: 10px;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  background-color: #2C5D8A;
  color: #fff;
}

.button-home:hover,
.button-projetos:hover,
.button-contato:hover {
  background-color: #A6806A;
  color: #1C1C1C;
  transition: 0.5s;
}
</style>