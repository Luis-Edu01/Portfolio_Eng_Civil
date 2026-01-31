<template>
  <footer>
    <p>
      Criado por 
      <a href="https://github.com/Luis-Edu01" target="_blank" rel="noopener noreferrer">
        Luís Eduardo
      </a>
    </p>
  </footer>
</template>

<script>
    export default{
        name:'Footer'
    }
</script>

<style>
footer{
    background-color: #1C1C1C;
    text-align: center;
    padding: 10px;
}
footer p{
    font-size: 1.2rem;
    color: white;
}
footer a{
  text-decoration: none;
  color:white;
}
footer a:hover{
  color: blue;
}
</style>