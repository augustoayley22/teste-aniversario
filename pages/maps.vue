<template>
  <div class="three-d-model-page">
    <div class="content">
      <h1>Navegue pelo mapa e descubra Esther e embarque em uma aventura cheia de mistérios.</h1>
      <ThreeDModel />
      <button class="start-button" @click="startStory">Começar História</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ThreeDModel from '@/components/World.vue'; // Ajuste o caminho conforme necessário

export default defineComponent({
  name: 'ThreeDModelPage',
  components: {
    ThreeDModel,
  },
  methods: {
    startStory() {
      this.$router.push('/navigation');  // Redireciona para a rota /maps
    },
  },
});
</script>

<style scoped>

body{
  background-color: black;
}

.three-d-model-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-image: url('@/public/fundo.webp'); /* Substitua pelo caminho da sua imagem */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.three-d-model-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo preto com 50% de opacidade */
  z-index: 1; /* Certifique-se de que a camada de opacidade está abaixo do conteúdo */
}

.content {
  position: relative;
  text-align: center;
  color: #ffffff; /* Cor do texto para contrastar com a imagem de fundo */
  z-index: 2; /* Coloca o conteúdo acima da camada de opacidade */
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  font-family: 'Fredoka One', cursive;
}

.start-button {
  display: inline-block;
  margin-bottom: 60px;
  padding: 10px 20px;
  font-size: 1.5em;
  font-family: 'Fredoka One', cursive;
  color: #fff;
  background-color: #FF4081;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
