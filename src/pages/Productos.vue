<template>
  <section class="productos">
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
          benefit: "Mejora cognitiva, memoria y energía mental",
          price: 35000,
          image: "/src/assets/images/melena.jpg"
        },
        {
          id: 2,
          name: "Pio Pino",
          benefit: "Antioxidantes, fibra y sabor umami",
          price: 28000,
          image: "/src/assets/images/piopino.jpg"
        },
        {
          id: 3,
          name: "Oyster Italiano",
          benefit: "Alto en proteínas y excelente para recetas",
          price: 25000,
          image: "/src/assets/images/oyster.jpg"
        }
      ]
    }
  },
  methods: {
    agregarCarrito(product) {
      console.log("Producto al carrito:", product);
      // más adelante aquí conectamos la store
    }
  }
}
</script>
