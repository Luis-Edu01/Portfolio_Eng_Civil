<template>
  <header>
    <div class="header-video">
      <video
        ref="bgVideo"
        autoplay
        muted
        loop
        playsinline
        class="conf-video"
      >
        <source src="@/assets/fundo.mov" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <div class="video-overlay"></div>

      <div class="texto-header">
        <h1>Andressa</h1>
        <p>Projetos que transformam conceito em estrutura!</p>
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
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      menuActive: false,
      isMobile: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.checkScreenSize)
    this.checkScreenSize()

    if (this.$refs.bgVideo) {
      this.$refs.bgVideo.playbackRate = 0.5
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 767
      if (!this.isMobile) {
        this.menuActive = false
      }
    }
  }
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
  height: 60vh;
}

.header-video {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.conf-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(39, 38, 38, 0.25);
  z-index: 1;
}

.texto-header {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;   
  align-items: center;
  justify-content: center;
  gap: 12px;   
  animation: fadeUp 1.5s ease-out forwards; /* Animação */
}
.texto-header h1{
  color: #42fd4b;
  font-size: 3rem;
}
.texto-header p{
  color: #42fd4b;
  font-size: 2rem;
}
                                /* Animação */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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
