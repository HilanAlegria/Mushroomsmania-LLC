import { defineStore } from "pinia";

export const useNosotrosStore = defineStore("nosotros", {
  state: () => ({
    data: null
  }),
  actions: {
    cargar() {
      this.data = {
        mision: "Ofrecer productos naturales de hongos de la más alta calidad.",
        vision: "Ser la empresa líder en productos de hongos.",
        objetivo: "Mejorar la salud y el bienestar de las familias."
      };
    }
  }
});
