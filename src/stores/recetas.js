import { defineStore } from "pinia";

const STORAGE_KEY = "recetas";

export const useRecetasStore = defineStore("recetas", {
  state: () => ({
    recetas: [],
    cargado: false
  }),

  actions: {
    async cargarRecetas() {
      if (this.cargado) return;

      const guardadas = localStorage.getItem(STORAGE_KEY);

      if (guardadas) {
        this.recetas = JSON.parse(guardadas);
      } else {
        const res = await fetch("/data/recetas.json");
        this.recetas = await res.json();
        this.guardarLocal();
      }

      this.cargado = true;
    },

    guardarLocal() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.recetas));
    },

    agregarReceta(receta) {
      receta.id = Date.now();
      this.recetas.push(receta);
      this.guardarLocal();
    },

    actualizarReceta(receta) {
      const index = this.recetas.findIndex(r => r.id === receta.id);
      if (index !== -1) {
        this.recetas[index] = receta;
        this.guardarLocal();
      }
    },

    eliminarReceta(id) {
      this.recetas = this.recetas.filter(r => r.id !== id);
      this.guardarLocal();
    }
  }
});
