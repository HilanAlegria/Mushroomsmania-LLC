import { defineStore } from "pinia";

const STORAGE_KEY = "mushroommania_productos";

export const useProductosStore = defineStore("productos", {
  state: () => ({
    productos: [],
    cargado: false
  }),

  actions: {
    async cargarProductos() {
      if (this.cargado) return;

      // 1️⃣ Intentar desde localStorage
      const guardados = localStorage.getItem(STORAGE_KEY);

      if (guardados) {
        this.productos = JSON.parse(guardados);
        this.cargado = true;
        return;
      }

      // 2️⃣ Fallback al JSON inicial
      const res = await fetch("/data/productos.json");
      this.productos = await res.json();
      this.cargado = true;

      // Guardar copia inicial
      this.persistir();
    },

    persistir() {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(this.productos)
      );
    },

    agregarProducto(producto) {
      producto.id = Date.now();
      this.productos.push(producto);
      this.persistir();
    },

    actualizarProducto(producto) {
      const index = this.productos.findIndex(
        p => p.id === producto.id
      );
      if (index !== -1) {
        this.productos[index] = producto;
        this.persistir();
      }
    },

    eliminarProducto(id) {
      this.productos = this.productos.filter(p => p.id !== id);
      this.persistir();
    },

    obtenerPorSlug(slug) {
      return this.productos.find(p => p.slug === slug);
    }
  }
});
