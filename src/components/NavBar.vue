<template>
  <aside class="sidebar">
    <!-- TÍTULO / MARCA -->
    <h1 class="brand" @click="goTo('/')">
      <span class="brand-top">MUSHROO</span>
      <span class="brand-bottom">MANIA🍄</span>
    </h1>

    <!-- MENÚ -->
    <nav class="menu">
      <router-link to="/">Inicio</router-link>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/sobre-nosotros">Nosotros</router-link>
      <router-link to="/beneficios">Beneficios</router-link>
      <router-link to="/recetas">Recetas</router-link>
      <router-link to="/contacto">Contacto</router-link>

      <!-- CARRITO -->
      <router-link to="/carrito" class="carrito-link">
        🛒 Carrito
      </router-link>
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
  background: linear-gradient(to bottom, #0b2e1a, #061a10);
  padding: 40px 30px;
  width: 260px;
  min-height: 100vh;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.6);
}

/* ===== TÍTULO ===== */
.brand {
  color: white;
  cursor: pointer;
  margin-bottom: 60px;
  line-height: 1.05;
}

.brand-top,
.brand-bottom {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
}

.brand:hover {
  color: var(--verde-herbal);
}

/* ===== MENÚ ===== */
.menu {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.menu a {
  color: #e6ffe6;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  padding-left: 10px;
  transition: transform 0.25s ease, color 0.25s ease;
  transform-origin: left center;
}

.menu a:hover:not(.router-link-exact-active) {
  transform: scale(1.4);
  color: var(--verde-herbal);
}

/* ===== CARRITO ===== */
.carrito-link {
  margin-top: 30px;
  padding: 14px 16px;
  border-radius: 12px;
  background: rgba(46, 204, 0, 0.12);
  color: #39ff14;
  font-weight: 700;
  box-shadow: 0 0 15px rgba(46, 204, 0, 0.25);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.carrito-link:hover {
  transform: scale(1.15);
  box-shadow: 0 0 28px rgba(46, 204, 0, 0.55);
}

/* LINK ACTIVO */
.menu a.router-link-exact-active {
  color: var(--verde-herbal);
  transform: scale(1.35);
  text-shadow: 0 0 12px rgba(57, 255, 20, 0.65);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
    min-height: auto;
    padding: 25px;
  }

  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  .menu a {
    font-size: 1.3rem;
  }

  .carrito-link {
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .menu {
    justify-content: center;
  }

  .brand-top,
  .brand-bottom {
    font-size: 1.6rem;
  }

  .menu a {
    font-size: 1.2rem;
  }
}
</style>
