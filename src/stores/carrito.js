import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", {
  state: () => ({
    items: []
  }),

  getters: {
    total() {
      return this.items.reduce((acc, item) => acc + item.precio, 0);
    },
    cantidad() {
      return this.items.length;
    }
  },

  actions: {
    agregarProducto(producto) {
      this.items.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        tipo: "Producto"
      });
    },

    eliminarProducto(id) {
      this.items = this.items.filter(item => item.id !== id);
    },

    vaciarCarrito() {
      this.items = [];
    }
  }
});
