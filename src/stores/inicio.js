import { defineStore } from "pinia";

export const useInicioStore = defineStore("inicio", {
  state: () => ({
    inicio: {
      titulo: "Hongos Medicinales",
      subtitulo: "Salud natural desde la raíz",
      imagen: "",
      textoBoton: "Ver productos",
      linkBoton: "/productos"
    }
  }),

  actions: {
    cargarInicio() {
      const data = localStorage.getItem("inicio");
      if (data) {
        this.inicio = JSON.parse(data);
      }
    },

    guardarInicio(payload) {
      this.inicio = payload;
      localStorage.setItem("inicio", JSON.stringify(this.inicio));
    }
  }
});
