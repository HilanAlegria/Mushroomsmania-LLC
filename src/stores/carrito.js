import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("carrito")) || []
  }),

  getters: {
    total() {
      return this.items.reduce(
        (acc, item) => acc + Number(item.precio || 0),
        0
      );
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
        precio: producto.precio || 0,
        imagen: producto.imagen,
        tipo: producto.tipo || "Producto"
      });
      this.guardar();
    },

    eliminarProducto(id) {
      this.items = this.items.filter(item => item.id !== id);
      this.guardar();
    },

    vaciarCarrito() {
      this.items = [];
      this.guardar();
    },

    guardar() {
      localStorage.setItem("carrito", JSON.stringify(this.items));
    }
  }
});
