<template>
  <div class="carousel-page" :style="{ backgroundImage: `url(${currentBackground})` }">
    <!-- Ícone de Mapa no Canto Superior Esquerdo -->
    <button class="map-icon" @click="goToNavigation">
      <font-awesome-icon :icon="['fas', 'map']" />
    </button>
    
    <div class="carousel-container">
      <!-- Botões de Navegação (Arrows) -->
      <button class="arrow arrow-left" @click="prevText">‹</button>
      
      <!-- Texto do Carrossel -->
      <div class="carousel-text">
        <p>{{ slides[currentText].text }}</p>
        <!-- Botão de "Alerta" para abrir o modal -->
        <button 
          v-if="currentText === slides.length - 1" 
          class="highlight-button" 
          @click="openModal"
        >
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
        </button>
        <!-- Botão de "Próxima Ilha" aparece no último texto -->
        <button 
          v-if="currentText === slides.length - 1" 
          class="next-island-button" 
          @click="goToNextPage"
        >
          Feliz Aniversário
        </button>
      </div>
      
      <button class="arrow arrow-right" @click="nextText">›</button>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <p>A expressão "queimar o barco" é usada para se referir à prática dos vikings de queimarem os seus barcos quando chegavam a um porto para invadir e conquistar um território. O objetivo era impedir qualquer possibilidade de recuo, significando, assim, vencer ou vencer.</p>
        <button @click="closeModal">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faExclamationTriangle, faMap, faShip } from '@fortawesome/free-solid-svg-icons';

library.add(faExclamationTriangle, faMap, faShip);

export default defineComponent({
  name: 'CarouselPage',
  setup() {
    const router = useRouter();

    const slides = ref([
      {
        text: 'Finalmente, ao alcançar a sétima ilha, Esther parou para analisar a situação e refletir sobre tudo o que havia vivido.',
        background: '/foto16.webp',
      },
      {
        text: 'Sentindo o peso das suas jornadas, decidiu que era hora.',
        background: '/foto16.webp',
      },
      {
        text: 'Com determinação, queimou seu barco, e seguiu em frente, pronta para encarar novos desafios com um espírito renovado.',
        background: '/foto17.webp',
      },
    ]);

    const currentText = ref(0);
    const isModalOpen = ref(false);
    const currentBackground = ref(slides.value[0].background);
    const previousBackground = ref('');

    const nextText = () => {
      currentText.value = (currentText.value + 1) % slides.value.length;
      currentBackground.value = slides.value[currentText.value].background;
    };

    const prevText = () => {
      currentText.value = (currentText.value - 1 + slides.value.length) % slides.value.length;
      currentBackground.value = slides.value[currentText.value].background;
    };

    const goToNavigation = () => {
      router.push('/navigation');
    };

    const goToNextPage = () => {
      router.push('/final'); // Redireciona para a próxima página (page6)
    };

    const openModal = () => {
      previousBackground.value = currentBackground.value;
      currentBackground.value = '/foto18.webp'; // Muda a imagem de fundo
      isModalOpen.value = true;
    };

    const closeModal = () => {
      currentBackground.value = previousBackground.value; // Volta para a imagem de fundo anterior
      isModalOpen.value = false;
    };

    return {
      slides,
      currentText,
      nextText,
      prevText,
      goToNavigation,
      goToNextPage,
      isModalOpen,
      openModal,
      closeModal,
      currentBackground,
    };
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  body {
    background-color: #111;
  }
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
  font-family: 'Poppins', sans-serif;
  transition: background-image 0.5s ease-in-out;
}

.carousel-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.carousel-container {
  position: relative;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -20%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  z-index: 2;
}

.carousel-text {
  color: white;
  font-size: 1.5em;
  text-align: center;
  max-width: 70%;
  font-family: 'Poppins', sans-serif;
  z-index: 2;
}

.highlight-button {
  margin-top: 10px;
  margin-right: 100px;
  padding: 10px 15px;
  font-size: 1em;
  font-family: 'Poppins', sans-serif;
  color: white;
  background-color: #FF4081;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 2;
}

.highlight-button:hover {
  transform: scale(1.1);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.highlight-button:active {
  transform: scale(0.95);
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
  z-index: 2;
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
  z-index: 2;
}

.map-icon:hover {
  transform: scale(1.1);
}

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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 500px;
}

.modal-content p {
  margin-bottom: 20px;
}

.modal-content button {
  padding: 10px 20px;
  background-color: #FF4081;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}
</style>
