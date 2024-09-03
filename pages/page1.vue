<template>
    <div class="carousel-page" :style="{ backgroundImage: `url(${backgrounds[currentText]})` }">
      <!-- Ícone de Mapa no Canto Superior Esquerdo -->
      <button class="map-icon" @click="goToNavigation">
        <font-awesome-icon :icon="['fas', 'map']" />
      </button>
      
      <div class="carousel-container">
        <!-- Botões de Navegação (Arrows) -->
        <button class="arrow arrow-left" @click="prevText">‹</button>
        
        <!-- Texto do Carrossel -->
        <div class="carousel-text">
          <p>{{ texts[currentText] }}</p>
          <!-- Botão de "Próxima Ilha" aparece no último texto -->
          <button 
            v-if="currentText === texts.length - 1" 
            class="next-island-button" 
            @click="goToNextPage"
          >
            Próxima Ilha
          </button>
        </div>
        
        <button class="arrow arrow-right" @click="nextText">›</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'CarouselPage',
    setup() {
      const router = useRouter();
      const texts = ref([
        'Aqui começa a história de Esther, uma aventureira e uma sede por desafios. Insatisfeita com as limitações de sua vida, buscou conhecer mais sobre o vasto e desconhecido mundo.',
        'À medida que seus horizontes se expandiam, crescia também seu desejo pelo próximo grande desafio.',
        'Com grande determinação, construiu seu próprio barco e partiu em direção à próxima ilha, pronta para enfrentar o que quer que estivesse à sua espera.',
      ]);
      
      const backgrounds = ref([
        '/foto1.webp',
        '/foto1.webp',
        '/foto2.webp'
        ]);

  
      const currentText = ref(0);
  
      const nextText = () => {
        currentText.value = (currentText.value + 1) % texts.value.length;
      };
  
      const prevText = () => {
        currentText.value = (currentText.value - 1 + texts.value.length) % texts.value.length;
      };
  
      const goToNavigation = () => {
        router.push('/navigation');
      };
  
      const goToNextPage = () => {
        router.push('/page2'); // Redireciona para a próxima página (page2)
      };
  
      return {
        texts,
        currentText,
        nextText,
        prevText,
        goToNavigation,
        goToNextPage,
        backgrounds,
      };
    },
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  
  .carousel-page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    font-family: 'Poppins', sans-serif; /* Aplica a fonte Poppins */
    transition: background-image 0.5s ease-in-out; /* Adiciona transição suave entre as imagens */
  }
  
  .carousel-page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Camada preta com 50% de opacidade */
    z-index: 1; /* Coloca a camada de opacidade abaixo do conteúdo */
  }
  
  .carousel-container {
    position: relative;
    top: 15%; /* Move o carrossel 20% a partir do topo */
    left: 50%;
    transform: translate(-50%, -20%); /* Ajusta para centralizar horizontalmente, e move o carrossel mais para cima */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: 1200px;
    z-index: 2; /* Coloca o conteúdo acima da camada de opacidade */
  }
  
  .carousel-text {
    color: white;
    font-size: 1.5em;
    text-align: center;
    max-width: 70%;
    font-family: 'Poppins', sans-serif; /* Usa a fonte Poppins */
    z-index: 2; /* Coloca o conteúdo acima da camada de opacidade */
  }
  
  .arrow {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 2em;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 2; /* Coloca o conteúdo acima da camada de opacidade */
  }
  
  .arrow:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .arrow:active {
    transform: scale(0.95);
  }
  
  .arrow-left {
    margin-right: 20px;
  }
  
  .arrow-right {
    margin-left: 20px;
  }
  
  /* Estilizando o Ícone de Mapa */
  .map-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    color: white;
    z-index: 2; /* Coloca o conteúdo acima da camada de opacidade */
  }
  
  .map-icon:hover {
    transform: scale(1.1);
  }
  
  /* Estilizando o botão "Próxima Ilha" */
  .next-island-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 0.8em;
    font-family: 'Poppins', sans-serif;
    color: white;
    background-color: #FF4081;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    z-index: 2;
  }
  
  .next-island-button:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .next-island-button:active {
    transform: scale(0.95);
  }
  </style>
  