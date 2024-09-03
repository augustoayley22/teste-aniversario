<template>
  <div class="container">
    <div class="text" data-splitting="">Feliz Anivérsario Estherzina!</div>
    <div class="presents">
      <div class="present orange">
        <div class="lid"></div>
        <div class="box"></div>
        <div class="bow"></div>
        <div class="ribbon"></div>
      </div>
      <div class="present blue">
        <div class="lid"></div>
        <div class="box"></div>
        <div class="bow"></div>
        <div class="ribbon"></div>
      </div>
      <div class="present green">
        <div class="lid"></div>
        <div class="box"></div>
        <div class="bow"></div>
        <div class="ribbon"></div>
      </div>
    </div>
    <button class="start-button" @click="startStory">Começar História</button>
  </div>
</template>

<script>
export default {
  methods: {
    startStory() {
      this.$router.push('/maps');  // Redireciona para a rota /maps
    },
    bursty(x, y) {
      const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        degree: 360,
        children: {
          fill: { white: "#34E1FF" },
          duration: 2000,
        },
      }).tune({
        x: x,
        y: y,
      });

      burst.replay();
    },
    randomizedConfetti() {
      let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
      let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
      const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        degree: 360,
        children: {
          fill: { white: "#34E1FF" },
          duration: 2000,
        },
      }).tune({
        x: randomX,
        y: randomY,
      });

      burst.replay();
    },
    Splitting() {
      // Se estiver utilizando o Splitting.js, adicione o código de inicialização aqui.
    },
  },
  mounted() {
    document.addEventListener("click", (event) => {
      this.bursty(event.pageX, event.pageY);
    });

    setInterval(() => this.randomizedConfetti(), 500);

    this.Splitting();
  },
};
</script>

<style lang="scss">
.start-button {
  display: inline-block;
  margin-top: 20px;
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

.container {
  text-align: center;
  padding: 20px;
}

@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import './main.scss';
</style>
