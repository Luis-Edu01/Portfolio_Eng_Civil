<template>
  <header>
    <div class="header">
        <img src="../assets/Logo4.png" alt="logo" class="logo">
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

header {
    width: 100vw;
    height: 34vh;              /* altura FIXA e previsível */
    position: relative;
    overflow: hidden;
    background-color: #000000;
}

.logo {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    display: block;
}
                                                    /* Botões */
.button {
  text-align: center;
  padding: 8px;
  background-color: #000000;
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