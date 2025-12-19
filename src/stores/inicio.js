import { defineStore } from "pinia";

export const useInicioStore = defineStore("inicio", {
  state: () => ({
    heroImages: []
  }),

  actions: {
    cargar() {
      this.heroImages = [
        "/images/melena.jpg",
        "/images/piopino.jpg",
        "/images/oyster.jpg"
      ];
    },

    actualizarImagenes(imagenes) {
      this.heroImages = imagenes;
    }
  }
});
