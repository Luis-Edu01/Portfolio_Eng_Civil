<template>
    <NavbarAlternativo/>
    <main class="container">
      <section class="infor-projeto">
        <h1>Projetos Casa de joão de barro Nacional</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium atque harum aperiam ipsum inventore. A, non! Adipisci praesentium quas ullam quis, debitis consequatur voluptatibus atque error cum, quod temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ad. Excepturi accusamus nam ut maiores debitis obcaecati ipsum enim qui neque esse corporis, est tempora quia tempore repellat odit laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quibusdam iusto harum ad. Aspernatur dolorum tempora molestias, assumenda numquam, nisi, sed quam id dolores saepe blanditiis exercitationem aperiam facere nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis sapiente exercitationem odio possimus delectus mollitia architecto labore aliquam eligendi? Animi veniam amet exercitationem vero sint ut ea ipsum fugit?</p>
      </section>
      <h2>
        Planta Baixa
      </h2>
      <section class="galeria-imagens">
        <div class="principal">
          <div class="teste">
            <img src="../../assets/exemplo.jpg" alt="teste imagem" class="teste-img">
          </div>
          <div class="teste">
            <img src="../../assets/exemplo.jpg" alt="teste imagem" class="teste-img">
          </div>
          <div class="teste">
            <img src="../../assets/exemplo.jpg" alt="teste imagem" class="teste-img">
          </div>

        </div>
      </section>
      <h2>
        Humanizada
      </h2>
      <section class="galeria-imagens">
        <div class="principal">
          <div class="teste1">
            <img src="../../assets/exemplo2.jpg" alt="teste imagem" class="teste-img">
          </div>
          <div class="teste1">
            <img src="../../assets/exemplo2.jpg" alt="teste imagem" class="teste-img">
          </div>
          <div class="teste1">
            <img src="../../assets/exemplo2.jpg" alt="teste imagem" class="teste-img">
          </div>
        </div>
      </section>
      <h2>
        Fachada
      </h2>
      <section class="galeria-imagens">
        <div class="principal">
          <div class="teste2">
            <img src="../../assets/bk-fundo.jpg" alt="teste imagem" class="teste-img">
          </div>
          <div class="teste2">
            <img src="../../assets/bk-fundo.jpg" alt="teste imagem" class="teste-img">
          </div>
          <div class="teste2">
            <img src="../../assets/bk-fundo.jpg" alt="teste imagem" class="teste-img">
          </div>
        </div>
      </section>     
    </main>
</template>
<script>
import NavbarAlternativo from "@/components/NavbarAlternativo.vue"

export default {
  name: 'Projeto_n1',
  components: {
    NavbarAlternativo
  }
}
</script>
<style>
html{
  background-color: #CBBBA0;
}

.container{
  margin-left: 20vw;
  margin-right: 20vw;
  background-color: #CBBBA0;  
}

.galeria-imagens{
  display: flex;
  justify-content: center;
  text-align: center;
}

.infor-projeto{
  display: flex;
  text-align: justify;
  flex-direction: column;
}

.infor-projeto > h1{
  display: inline;
  text-align: center;
}
h2{
  text-align: center;
  background-color: transparent;
  padding: 10px;
  font-size: 2rem;
}
.principal{
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
}

.teste,
.teste1,
.teste2 {
  width: 350px;
  height: 250px;
  margin: 10px;
  overflow: visible; /* ESSENCIAL */
}

.teste-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  transform-origin: center center;
  cursor: zoom-in;
}

.teste-img:hover{
    transform: scale(1.7);
}
</style>