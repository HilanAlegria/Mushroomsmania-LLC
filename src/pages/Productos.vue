<template>
  <section class="py-20 px-6 max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold text-[#39ff14] mb-12 text-center">
      Nuestros Productos
    </h2>

    <div class="grid gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProductCard
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
        @add="agregarAlCarrito"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { useProductosStore } from "@/stores/productos";
import { useCarritoStore } from "@/stores/carrito";

export default {
  name: "Productos",
  components: { ProductCard },

  data() {
    return {
      productosStore: useProductosStore()
    };
  },

  async mounted() {
    await this.productosStore.cargarProductos();
  },

  computed: {
    productos() {
      return this.productosStore.productos;
    }
  },

  methods: {
    agregarAlCarrito(producto) {
      const carrito = useCarritoStore();
      carrito.agregarProducto(producto);
    }
  }
};
</script>