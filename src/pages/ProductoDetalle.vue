<template>
  <section v-if="producto" class="producto-detalle container">
    <div class="detalle-grid">
      
      <!-- IMAGEN -->
      <div class="imagen">
        <img :src="producto.imagen" :alt="producto.nombre" />
      </div>

      <!-- INFO -->
      <div class="info">
        <h1>{{ producto.nombre }}</h1>
        <p class="descripcion">{{ producto.descripcion }}</p>

        <ul class="beneficios">
          <li v-for="(beneficio, index) in producto.beneficios" :key="index">
            ✔ {{ beneficio }}
          </li>
        </ul>

        <div class="precio">$ {{ producto.precio }} / lb</div>

        <button class="btn">Agregar al carrito</button>
      </div>

    </div>
  </section>

  <section v-else class="container text-center">
    <p>Producto no encontrado</p>
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
.producto-detalle {
  padding: 80px 20px;
}

/* GRID */
.detalle-grid {
  display: grid;
  gap: 50px;
}

@media (min-width: 768px) {
  .detalle-grid {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

/* IMAGEN */
.imagen img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* INFO */
.info h1 {
  font-size: 3rem;
  color: var(--verde-herbal);
  margin-bottom: 20px;
}

.descripcion {
  font-size: 1.1rem;
  color: #cfcfcf;
  margin-bottom: 25px;
}

.beneficios {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.beneficios li {
  margin-bottom: 10px;
  color: #e0ffe0;
}

/* PRECIO */
.precio {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--verde-herbal);
}

/* BOTÓN */
.btn {
  background: var(--verde-herbal);
  color: #041b00;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: var(--radius);
  box-shadow: 0 0 25px rgba(46, 204, 0, 0.6);
}

.btn:hover {
  box-shadow: 0 0 40px rgba(46, 204, 0, 0.85);
}
</style>
