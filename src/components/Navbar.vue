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
    </div>
    
    <div class="texto-header">
      <h1>teste</h1>
    </div>
    

  </header>

  <div class="button">
    <router-link to="/">
      <button class="button-portifolio">Portifólio</button>
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
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)

    this.$refs.bgVideo.playbackRate = 0.5 /*--> Controle de velocidade do vídeo */
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    },
    closeMenu() {
      if (this.isMobile) {
        this.menuActive = false
      }
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

.video-overlay{
    position: absolute;
    inset: 0;
    background: rgba(39, 38, 38, 0.25);
    z-index: 1; 
}

.texto-header{
  z-index:3;
  transform: translate(0%, -550%);
  text-align: center;
  background-color: transparent;
}
.texto-header h1{
  color: #FFFFFF;
}

/* BOTÕES */
.button {
  text-align: center;
  padding: 1px;
  background-color: #CBBBA0;
}

.button-portifolio,
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

.button-portifolio:hover,
.button-projetos:hover,
.button-contato:hover {
  background-color: #A6806A;
  color: #1C1C1C;
  transition: 0.5s;
}
</style>
