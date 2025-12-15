<template>
  <section class="detalle-producto">
    <div class="detalle-grid">
      <img :src="producto.imagen" :alt="producto.nombre" />

      <div class="detalle-info">
        <h2>{{ producto.nombre }}</h2>
        <p class="precio">$15.00 / lb</p>

        <p class="descripcion">
          {{ producto.descripcionLarga }}
        </p>

        <ul class="beneficios">
          <li v-for="(b, i) in producto.beneficios" :key="i">
            ✔ {{ b }}
          </li>
        </ul>

        <button>Agregar al carrito</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductoDetalle",

  data() {
    return {
      producto: null
    };
  },

  async mounted() {
    const response = await fetch("/data/productos.json");
    const productos = await response.json();

    const slug = this.$route.params.slug;
    this.producto = productos.find(p => p.slug === slug);
  }
};

</script>

<style scoped>
.detalle-producto {
  padding: 80px 24px;
}

.detalle-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.detalle-grid img {
  width: 100%;
  border-radius: var(--radius);
}

.detalle-info h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.detalle-info .precio {
  font-size: 1.6rem;
  color: var(--verde-bosque);
  margin-bottom: 25px;
}

.descripcion {
  color: #d0d0d0;
  margin-bottom: 30px;
}

.beneficios {
  list-style: none;
  margin-bottom: 35px;
}

.beneficios li {
  margin-bottom: 10px;
  color: #cfcfcf;
}
</style>
