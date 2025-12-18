import { defineStore } from "pinia";

export const useRecetasStore = defineStore("recetas", {
  state: () => ({
    recetas: [],
    cargado: false
  }),

  actions: {
    async cargarRecetas() {
      if (this.cargado) return;

      const res = await fetch("/data/recetas.json");
      this.recetas = await res.json();
      this.cargado = true;
    },

    agregarReceta(receta) {
      receta.id = Date.now();
      this.recetas.push(receta);
      this.persistir();
    },

    actualizarReceta(receta) {
      const index = this.recetas.findIndex(r => r.id === receta.id);
      if (index !== -1) {
        this.recetas[index] = receta;
        this.persistir();
      }
    },

    eliminarReceta(id) {
      this.recetas = this.recetas.filter(r => r.id !== id);
      this.persistir();
    },

    persistir() {
      localStorage.setItem(
        "recetas",
        JSON.stringify(this.recetas)
      );
    },

    cargarDesdeLocalStorage() {
      const data = localStorage.getItem("recetas");
      if (data) {
        this.recetas = JSON.parse(data);
        this.cargado = true;
      }
    }
  }
});
