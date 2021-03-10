<template>
<!-- Contenido del index -->
  <div id="container" class="bg-dark ">
    <div id="img" src="../assets/background2.jpg" alt="Home">
    <div  class="display-2 text-light w-100 mt-5" id="titulo">Disfruta de tus canciones favoritas</div>
    <div  class="fs-2 text-light w-100 " id="subtitulo"> Sube tu música y crea tu lista personalizada </div>
      <router-link to="/musicList" type="button" class="btn btn-success text-light fs-4">Empezar</router-link>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
   color: inherit; /* blue colors for links too */
  text-decoration: inherit;
}

#img {
  position: relative;
  background-image: url("../assets/background2.jpg");
  background-size: cover;
  width: 100vw;
  height: 86vh;
}
#titulo {
position: absolute;
top: 1vh;
}
#subtitulo {
position: absolute;
top: 30vh;
}
.btn {
position: absolute;
  width: 26vw;
  padding: 0.4em;
  right: 40vw;
top: 50vh;

}
</style>
