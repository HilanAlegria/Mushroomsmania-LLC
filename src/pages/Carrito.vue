<template>
  <section class="carrito container">
    <h1 class="titulo">🛒 Tu carrito</h1>

    <!-- CARRITO VACÍO -->
    <div v-if="carritoVacio" class="carrito-vacio">
      <p>Tu carrito está vacío por ahora</p>

      <div class="acciones">
        <router-link to="/productos" class="btn">
          Ver productos
        </router-link>

        <router-link to="/recetas" class="btn btn-outline">
          Explorar recetas
        </router-link>
      </div>
    </div>

    <!-- CARRITO CON ITEMS (estructura preparada) -->
    <div v-else class="carrito-contenido">
      <div class="items">
        <div class="item" v-for="item in items" :key="item.id">
          <img :src="item.imagen" :alt="item.nombre" />

          <div class="info">
            <h3>{{ item.nombre }}</h3>
            <p>{{ item.tipo }}</p>
          </div>

          <div class="precio">
            ${{ item.precio }}
          </div>
        </div>
      </div>

      <div class="resumen">
        <p>
          <strong>Total:</strong>
          ${{ total }}
        </p>

        <button class="btn disabled">
          Finalizar compra (próximamente)
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carrito",
  data() {
    return {
      // Más adelante esto vendrá de un store (Pinia / Vuex)
      items: []
    };
  },
  computed: {
    carritoVacio() {
      return this.items.length === 0;
    },
    total() {
      return this.items.reduce((acc, item) => acc + item.precio, 0);
    }
  }
};
</script>

<style scoped>
.carrito {
  padding: 80px 40px;
}

/* TÍTULO */
.titulo {
  font-size: 3rem;
  color: var(--verde-herbal);
  margin-bottom: 40px;
}

/* ===== CARRITO VACÍO ===== */

.carrito-vacio {
  background: #0d120f;
  padding: 50px;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow);
}

.carrito-vacio p {
  font-size: 1.4rem;
  margin-bottom: 30px;
  color: #e6ffe6;
}

.acciones {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* ===== BOTONES ===== */

.btn {
  padding: 14px 28px;
  background: var(--verde-herbal);
  color: #041b00;
  font-weight: 700;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 0 0 18px rgba(46, 204, 0, 0.45);
  transition: all 0.3s ease;
}

.btn:hover {
  box-shadow: 0 0 28px rgba(46, 204, 0, 0.75);
}

.btn-outline {
  background: transparent;
  color: var(--verde-herbal);
  border: 2px solid var(--verde-herbal);
  box-shadow: none;
}

.btn-outline:hover {
  background: var(--verde-herbal);
  color: #041b00;
}

/* ===== CARRITO CON ITEMS ===== */

.carrito-contenido {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: center;
  background: #0d120f;
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}

.item h3 {
  color: #e6ffe6;
  margin-bottom: 5px;
}

.item p {
  color: #cfcfcf;
  font-size: 0.95rem;
}

.precio {
  font-weight: 700;
  color: var(--verde-herbal);
}

/* ===== RESUMEN ===== */

.resumen {
  background: #0d120f;
  padding: 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  height: fit-content;
}

.resumen p {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #e6ffe6;
}

.btn.disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* RESPONSIVE */

@media (max-width: 1024px) {
  .carrito-contenido {
    grid-template-columns: 1fr;
  }
}
</style>
