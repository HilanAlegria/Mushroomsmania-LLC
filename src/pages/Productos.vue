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

export default {
  components: { ProductCard },

  data() {
    return {
      productos: []
    };
  },

  async mounted() {
    const res = await fetch("/data/productos.json");
    this.productos = await res.json();
  },

  methods: {
    agregarAlCarrito(producto) {
      console.log("Agregar:", producto);
    }
  }
};
</script>
