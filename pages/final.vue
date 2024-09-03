<template>
    <div class="confetti-page">
      <div class="card">
        <p class="card-text">
          Estherzinha, enfim, os vinte anos, chegou. Contei uma pequena história em que tive o privilégio de poder ouvir e ver. 
          Fico muito feliz por isso e grato por tudo que pude presenciar. 
          Sou grato por ter você como amiga e por tudo que você fez por mim, até onde consegui chegar e como cheguei. 
          Te desejo muitas felicidades no seu dia, estherzinha e de muita comemoração que você merece demais, 
          às vezes você é estressada e se faz difícil, mas é uma mulher incrível, 
          te desejo sucesso nos seus próximos objetivos e na sua vida.
        </p>
        <button class="back-button" @click="goBack">Voltar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, onMounted, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';
    import confetti from 'canvas-confetti';
  
    export default defineComponent({
      name: 'ConfettiPage',
      setup() {
        const router = useRouter();
        let interval: ReturnType<typeof setInterval>;
  
        const goBack = () => {
          router.push('/navigation');
        };
  
        onMounted(() => {
          const duration = 60 * 60 * 1000;
          const animationEnd = Date.now() + duration;
          const defaults = { startVelocity: 30, spread: 360, ticks: 20, zIndex: 0 };
  
          function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
          }
  
          interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
  
            if (timeLeft <= 0) {
              return clearInterval(interval);
            }
  
            const particleCount = 20 * (timeLeft / duration);
  
            // since particles fall down, start a bit higher than random
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
              })
            );
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
              })
            );
          }, 250);
        });
  
        onUnmounted(() => {
          clearInterval(interval);  // Limpa o intervalo ao sair da página
        });
  
        return {
          goBack,
        };
      }
    });
  </script>
  
  <style scoped>
    .confetti-page {
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
      background-image: url('@/public/foto19.webp'); /* Substitua pelo caminho da sua imagem */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

  
  .card {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: justify;
    max-width: 600px;
    width: 100%;
    line-height: 1.6;
    font-family: 'Georgia', serif;
    color: #333;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
  
  .card::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    border-radius: 18px;
    background: linear-gradient(145deg, #f5f5f5, #e0e0e0);
  }
  
  .card-text {
    font-size: 1.2em;
    color: #333333;
  }
  
  .back-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    font-family: 'Georgia', serif;
    color: white;
    background-color: #FF4081;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .back-button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .back-button:active {
    transform: scale(0.95);
  }
  </style>
  