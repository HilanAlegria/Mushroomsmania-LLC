import { defineStore } from "pinia";

const STORAGE_KEY = "mushroommania_productos";

export const useProductosStore = defineStore("productos", {
  state: () => ({
    productos: [],
    cargado: false
  }),

  getters: {
    todos(state) {
      return state.productos;
    },

    obtenerPorSlug: (state) => {
      return (slug) =>
        state.productos.find(p => p.slug === slug);
    },

    obtenerPorId: (state) => {
      return (id) =>
        state.productos.find(p => p.id === id);
    }
  },

  actions: {
    async cargarProductos() {
      if (this.cargado) return;

      // 1️⃣ Intentar cargar desde localStorage
      const guardados = localStorage.getItem(STORAGE_KEY);

      if (guardados) {
        this.productos = JSON.parse(guardados);
        this.cargado = true;
        return;
      }

      // 2️⃣ Si no hay, cargar desde JSON
      const res = await fetch("/data/productos.json");
      this.productos = await res.json();

      // 3️⃣ Guardar copia local
      this._persistir();
      this.cargado = true;
    },

    agregarProducto(producto) {
      this.productos.push({
        ...producto,
        id: Date.now()
      });
      this._persistir();
    },

    actualizarProducto(productoActualizado) {
      const index = this.productos.findIndex(
        p => p.id === productoActualizado.id
      );

      if (index !== -1) {
        this.productos[index] = productoActualizado;
        this._persistir();
      }
    },

    eliminarProducto(id) {
      this.productos = this.productos.filter(
        p => p.id !== id
      );
      this._persistir();
    },

    _persistir() {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(this.productos)
      );
    }
  }
});
