import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

export default {
  mounted() {
    document.addEventListener("click", (event) => {
      this.bursty(event.pageX, event.pageY);
    });

    setInterval(() => this.randomizedConfetti(), 500);

    Splitting();  // Inicializa o Splitting.js aqui
  },
  ...
};
