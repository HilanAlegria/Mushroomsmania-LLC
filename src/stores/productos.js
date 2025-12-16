import { defineStore } from "pinia";

export const useProductosStore = defineStore("productos", {
  state: () => ({
    productos: [],
    cargado: false
  }),

  actions: {
    async cargarProductos() {
      if (this.cargado) return;

      const res = await fetch("/data/productos.json");
      this.productos = await res.json();
      this.cargado = true;
    },

    obtenerPorSlug(slug) {
      return this.productos.find(p => p.slug === slug);
    }
  }
});
