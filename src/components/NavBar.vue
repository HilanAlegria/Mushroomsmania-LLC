<template>
  <header class="navbar">
    <div class="navbar-container">

      <!-- LOGO -->
      <div class="logo" @click="$router.push('/')">
        Mushroomsmania
      </div>

      <!-- BOTÓN HAMBURGUESA (MOBILE) -->
      <div class="menu-btn" @click="toggleMenu">
        ☰
      </div>

      <!-- LINKS -->
      <nav :class="{ open: menuOpen }" class="nav-links">
        <a @click="goTo('/')">Inicio</a>
        <a @click="goTo('/productos')">Productos</a>
        <a @click="goTo('/recetas')">Recetas</a>
        <a @click="goTo('/contacto')">Contacto</a>

        <button class="cart-btn" @click="goTo('/carrito')">
          🛒
        </button>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    goTo(route) {
      this.menuOpen = false;
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background: #2F4F4F;
  padding: 12px 20px;
  color: white;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: auto;
}

.logo {
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
}

/* MENU LINKS */
.nav-links {
  display: flex;
  gap: 25px;
  align-items: center;
}

.nav-links a {
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.cart-btn {
  background: #4CAF50;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  color: white;
  border-radius: 6px;
}

/* MOBILE */
.menu-btn {
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background: #2F4F4F;
    width: 200px;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
