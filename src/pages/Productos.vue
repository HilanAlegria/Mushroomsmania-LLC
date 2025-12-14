<template>
  <section class="productos container">
    <h1 class="text-center">Nuestros Productos</h1>

    <div class="grid grid-3 mt-40">
      <ProductCard
        v-for="p in productos"
        :key="p.id"
        :product="p"
        @add-to-cart="agregarCarrito"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Productos",
  components: { ProductCard },
  data() {
    return {
      productos: [
        {
          id: 1,
          name: "Melena de León",
          benefit: "Apoya la memoria, concentración y energía mental",
          price: 35000,
          image: "/src/assets/images/melena.jpg"
        },
        {
          id: 2,
          name: "Pio Pino",
          benefit: "Rico en antioxidantes y sabor umami",
          price: 28000,
          image: "/src/assets/images/piopino.jpg"
        },
        {
          id: 3,
          name: "Oyster Italiano",
          benefit: "Proteína vegetal ideal para recetas saludables",
          price: 25000,
          image: "/src/assets/images/oyster.jpg"
        }
      ]
    }
  },
  methods: {
    agregarCarrito(product) {
      console.log("Producto agregado:", product);
      // aquí luego conectamos Pinia
    }
  }
}
</script>

<style scoped>
.productos {
  padding-top: 40px;
}
</style>
