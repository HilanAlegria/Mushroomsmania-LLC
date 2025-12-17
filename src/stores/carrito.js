import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", {
  state: () => ({
    // Carga inicial desde localStorage
    items: JSON.parse(localStorage.getItem("carrito")) || []
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
        tipo: producto.tipo || "Producto"
      });

      this.guardarCarrito();
    },

    eliminarProducto(id) {
      this.items = this.items.filter(item => item.id !== id);
      this.guardarCarrito();
    },

    vaciarCarrito() {
      this.items = [];
      this.guardarCarrito();
    },

    guardarCarrito() {
      localStorage.setItem("carrito", JSON.stringify(this.items));
    }
  }
});
