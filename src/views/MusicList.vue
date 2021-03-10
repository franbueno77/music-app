<template>
<!-- se muestra un listado de los registros existentes en la base de datos -->
  <div class="background bg-light">
    <h1  class="display-1 text-light" >Mi Lista</h1>
    <div class="list-group">
    <div v-for="data in dataLocation" :key="data._id" >

       <div class="list-group-item list-group-item-action bg-dark  mb-2" aria-current="true">
      <router-link :to="{name: 'player', params:{

        group: data.group,
        title: data.title,
        genre: data.genre,
        fileName: data.fileName

        }}
        " class="text-light" style="font-size:2em; text-decoration: none; ">{{data.title}}</router-link>
    <div class="d-flex w-100 justify-content-center">
      <h5 class="mb-1   w-25  text-light badge bg-success p-2">{{data.group}}</h5>
    </div>
    <p class="mb-1">Genero: {{data.genre}}</p>
    <div class="d-flex w-100 justify-content-end" >
    <button v-on:click= "del(data._id)" type="button" style="font-size:0.9em" class="btn btn-dark">Quitar de mi lista</button>
</div>
  </div>
  </div>

    </div>

  </div>
</template>

<script>
// Importo la librería Axios
import axios from 'axios'

export default {
  data () {
    return {
      dataLocation: []
    }
  },
  async mounted () {
    this.getData()
  },
  methods: {
    // metodo con el que obtengo los registros, llamo a la librería axios y especifico la ruta de mi api desde la cual obtengo los datos
    getData () {
      axios
        .get('http://localhost:3000/')
        .then(res => {
          this.dataLocation = res.data
        })
        .catch(error => console.log(error))
    },
    // método con el cual borro un registro indicando su ID
    del (param) {
      axios.get(`http://localhost:3000/delete/${param}`)
        .then(this.getData()
        ).then()

        .catch(err => console.log(err))

      console.log(param)
    }

  }
}
</script>
<style scoped>
.background {
  position: relative;
  background-image: url("../assets/background2.jpg");
  background-size: cover;
  width: 100vw;
  height: 86vh;
}
</style>
