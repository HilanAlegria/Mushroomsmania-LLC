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

    obtenerPorSlug(slug) {
      return this.recetas.find(r => r.slug === slug);
    }
  }
});
