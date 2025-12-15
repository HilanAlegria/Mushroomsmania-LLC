<template>
  <section class="productos">
    <h2 class="section-title">Nuestros Productos</h2>

    <div class="productos-grid">
      <router-link
        class="producto-card card"
        v-for="producto in productos"
        :key="producto.id"
        :to="`/productos/${producto.slug}`"
      >
        <img :src="producto.imagen" :alt="producto.nombre" />

        <div class="producto-info">
          <h3>{{ producto.nombre }}</h3>
          <p>{{ producto.descripcion }}</p>

          <div class="producto-footer">
            <span class="precio">$15.00 / lb</span>
            <button>Agregar</button>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>


<script>
export default {
  name: "Productos",

  data() {
    return {
      productos: []
    };
  },

  async mounted() {
    const response = await fetch("/data/productos.json");
    this.productos = await response.json();
  }
};

</script>

<style scoped>
.productos {
  padding: 70px 24px;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 50px;
  color: var(--verde-bosque);
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 35px;
}

/* CARD oscura */
.producto-card {
  background: #0d120f;
  border-radius: 16px;
  overflow: hidden;
}

/* Imagen */
.producto-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.producto-card {
  text-decoration: none;
  color: inherit;
}
/* Info */
.producto-info {
  padding: 22px;
}

.producto-info h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--verde-bosque);
}

.producto-info p {
  color: #cfcfcf;
  margin-bottom: 22px;
}

/* Footer */
.producto-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.precio {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--verde-bosque);
}

/* Botón */
button {
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  background: var(--verde-herbal);
  color: #041b00;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 0 18px rgba(46, 204, 0, 0.45);
}

button:hover {
  transform: scale(1.08);
  box-shadow: 0 0 30px rgba(46, 204, 0, 0.75);
}
</style>
