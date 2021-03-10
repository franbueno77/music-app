<template>
<!-- Formulario para registrar las canciones  en la base de datos -->
  <div id="background">
    <div class="Form d-flex justify-content-center align-items-center flex-column  ">
    <h1 class="text-light mt-3" >Guarda tus canciones favoritas</h1>
  <form class="w-25" >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input v-model="dataSong.group"  type="text"  class="form-control" id="group" placeholder="Grupo" aria-describedby="group">
  </div>

<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input v-model="dataSong.title" type="text" class="form-control" id="group" placeholder="Título de la canción" aria-describedby="group">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input v-model="dataSong.genre" type="text" class="form-control" id="group" placeholder="Género musical" aria-describedby="group">
  </div>

  <div class="mb-3">
  <label for="formFile" class="form-label"></label>
  <input class="form-control" type="file" @change ="selectFile" id="formFile">
</div>
  <button type="submit" @click.prevent="sendData" class="btn btn-success">Guardar</button>
</form>
      <h1 class="text-light mt-3 fs-2" v-if="success">La canción se ha guardado con éxito, visita tu lista  para escucharla</h1>
</div>
  </div>

</template>

<script>

// import Map from '@/components/Map.vue'
import axios from 'axios'

export default {
  name: 'Form',
  // inicializo las variables vacías
  data () {
    return {
      dataSong: {
        group: '',
        title: '',
        genre: ''

      },
      file: '',
      success: false
    }
  },

  methods: {
    // Método que recoge información del archivo subido
    selectFile (event) {
      console.log(event.path[0].files)
      // console.log(event.target.files[0])
      this.file = event.target.files[0]
    },
    // Método que me permite crear el registro en la base de datos de la canción subida
    async sendData () {
      const song = {
        group: this.dataSong.group,
        title: this.dataSong.title,
        genre: this.dataSong.genre,
        fileName: this.file.name
      }

      console.log(song)
      // accedo a los métodos que me proporciona Axios para acceder a las rutas de mi api y consumirlas
      await axios
        .post('http://localhost:3000/create', {
          group: this.dataSong.group,
          title: this.dataSong.title,
          genre: this.dataSong.genre,
          fileName: this.file.name
        }
        )
        .then(response => {
          this.dataSong = response
          console.log(response.data)
          this.success = true
        })
        .catch(e => {
          console.error(e)
        })
    },
    // Método que me permite subir las caciones
    upload () {
      var formData = new FormData()
      formData.append(this.file.name, this.file)

      axios.put('http://localhost:3000/create', {
        headers: {
          'Content-Type': 'multipart/form-data'

        }
      }, this.file).then(response => console.log(response))
        .catch(error => console.log(error))
    }

  },
  components: {

  }
}

</script>
<style scoped>
#background {
   position: relative;
  background-image: url("../assets/background2.jpg");
  background-size: cover;
  width: 100vw;
  height: 86vh;
}
</style>
