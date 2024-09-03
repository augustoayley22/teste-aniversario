<template>
  <div class="map-page">
    <!-- Botão de Voltar -->
    <button class="back-button" @click="goBack">‹</button>
    
    <div class="map-container">
      <!-- Botões numerados sobre o mapa -->
      <button v-for="n in 7" :key="n" :class="'map-button map-button-' + n" @click="navigateToPage(n)">{{ n }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MapPage',
  methods: {
    navigateToPage(pageNumber: number) {
      this.$router.push(`/page${pageNumber}`);  // Redireciona para a rota /page1, /page2, ..., /page7
    },
    goBack() {
      this.$router.push('/maps');  // Volta para a página anterior no histórico
    }
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.map-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/mapa.webp'); /* Verifique se a imagem existe nesse caminho */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.map-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Camada preta com 40% de opacidade */
  z-index: 1; /* Certifique-se de que a camada de opacidade está abaixo do conteúdo */
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  font-size: 2em; /* Aumenta o tamanho da seta */
  color: #fff;
  background-color: transparent; /* Fundo transparente */
  border: none;
  cursor: pointer;
  z-index: 3; /* Certifique-se de que o botão está acima da camada de opacidade */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.back-button:hover {
  transform: scale(1.1);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.back-button:active {
  transform: scale(0.95);
}

.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2; /* Coloca o conteúdo acima da camada de opacidade */
}

.map-button {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FF4081;
  color: white;
  font-size: 1.2em;
  font-family: 'Fredoka One', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 3; /* Coloca os botões acima de tudo */
}

.map-button:hover {
  transform: scale(1.1);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.map-button:active {
  transform: scale(0.95);
}

/* Estilos para posicionar os botões - ajuste conforme necessário */
.map-button-1 {
  top: 20%;
  left: 27%;
}

.map-button-2 {
  top: 27%;
  left: 70%;
}

.map-button-3 {
  top: 60%;
  left: 70%;
}

.map-button-4 {
  top: 53%;
  left: 51%;
}

.map-button-5 {
  top: 83%;
  left: 22%;
}

.map-button-6 {
  top: 85%;
  left: 41%;
}

.map-button-7 {
  top: 87%;
  left: 62%;
}
</style>
