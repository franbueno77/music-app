<template>
<p></p>
<p></p>
<p></p>
<!-- Se muestra el reproductor de música con información sobre la canción escogida , y desde donde podemos escuchar música -->
<div class="card text-center bg-dark p-2 text-light  ">
  <div class="card-header ">
    <p class="display-4 " >{{title}}</p>
  </div>
  <div class="card-body ">
    <h5 class="card-title lead " style="font-size:1.5em" >{{group}}</h5>
    <p class="card-text">{{genre}}</p>
    <button :disabled="isPlaying"  @click="playSong"   class="btn btn-dark"><i class="bi bi-play-circle-fill " style="font-size:3em" ></i></button>
    <button :disabled="!isPlaying"  class="btn btn-dark" @click="pauseSong" ><i class="bi bi-pause-circle-fill " style="font-size:3em" ></i></button>
    <button :disabled="!isPlaying" @click="stopSong" id="stopBtn" class="btn btn-dark"><i class="bi bi-stop-circle-fill " style="font-size:3em" ></i></button>
  </div>

  <div class="card-footer ">
<router-link class="text-muted" to="../musicList" >volver</router-link>

  </div>
<audio ref="audio" v-bind:src="require(`@/assets/${fileName}`)" id="player" preload="metadata" type="audio/ogg"></audio>
</div>
</template>

<script>

export default {
  // recojo la información obtenida de la ruta establecida en MusicList y la guardo
  data () {
    return {
      group: this.$route.params.group,
      title: this.$route.params.title,
      genre: this.$route.params.genre,
      fileName: this.$route.params.fileName,
      isPlaying: false

    }
  },
  methods: {
    // Método que me permite reproducir las canciones
    playSong () {
      this.$refs.audio.play()
      this.isPlaying = true
    },
    // Método que me permite pausar las canciones
    pauseSong () {
      this.$refs.audio.pause()
      this.isPlaying = false
    },
    // Método que me permite parar las canciones
    stopSong () {
      this.$refs.audio.pause()
      this.$refs.audio.currentTime = 0
      this.isPlaying = false
    }
  }
}
</script>
