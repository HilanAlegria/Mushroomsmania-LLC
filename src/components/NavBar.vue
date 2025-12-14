<template>
  <aside class="sidebar">
    <!-- TÍTULO / MARCA -->
    <h1 class="brand" @click="goTo('/')">
      <span class="brand-top">Mushroo</span>
      <span class="brand-bottom">Mania</span>
    </h1>


    <!-- MENÚ -->
    <nav class="menu">
      <a @click="goTo('/')">Inicio</a>
      <a @click="goTo('/productos')">Productos</a>
      <a @click="goTo('/beneficios')">Beneficios</a>
      <a @click="goTo('/recetas')">Recetas</a>
      <a @click="goTo('/contacto')">Contacto</a>
      <a @click="goTo('/carrito')">Carrito</a>
    </nav>
  </aside>
</template>


<script>
export default {
  name: "NavBar",
  methods: {
    goTo(route) {
      this.$router.push(route)
    }
  }
}
</script>


<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background: var(--verde-bosque);
  color: white;
  padding: 30px 20px;
}

/* TÍTULO GRANDE */
.brand {
  color: white;
  cursor: pointer;
  text-align: left;
  margin-bottom: 50px;
  line-height: 1;
}

/* Parte superior */
.brand-top {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
}

/* Parte inferior */
.brand-bottom {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 4px; /* poco espacio entre líneas */
}

/* Hover sutil también para el título */
.brand:hover {
  color: var(--verde-herbal);
}

/* MENÚ */
.menu {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

/* LINKS */
.menu a {
  cursor: pointer;
  color: white;
  text-decoration: none;

  font-size: 1.4rem;
  font-weight: 600;

  transition: transform 0.25s ease, color 0.25s ease;
  transform-origin: left center;
}

.menu a:hover {
  transform: scale(1.4);
  color: var(--verde-herbal);
}

/* ===== RESPONSIVE NAVBAR ===== */

@media (max-width: 1024px) {
  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 20px;
  }

  .brand {
    margin-bottom: 20px;
  }

  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 18px;
  }

  .menu a {
    font-size: 1.2rem;
  }

  .menu a:hover {
    transform: scale(1.15);
  }
}

/* ===== CELULARES ===== */

@media (max-width: 768px) {
  .menu {
    justify-content: center;
  }

  .brand-top,
  .brand-bottom {
    font-size: 1.5rem;
  }

  .menu a {
    font-size: 1.1rem;
  }
}

</style>

