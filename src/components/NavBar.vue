<template>
  <aside class="sidebar">
    <div class="brand" @click="goTo('/')">
      <div class="logo">🍄</div>
      <span class="brand-name">MUSHROOMANIA</span>
    </div>
    <button class="menu-toggle" @click="abierto = !abierto">
      ☰ Menú
    </button>
    <nav class="menu" :class="{ abierto }">
      <router-link to="/">🏠 Inicio</router-link>
      <router-link to="/productos">🛍️ Productos</router-link>
      <router-link to="/sobre-nosotros">👥 Nosotros</router-link>
      <router-link to="/beneficios">💚 Beneficios</router-link>
      <router-link to="/recetas">🍲 Recetas</router-link>

      <!-- CARRITO -->
      <router-link to="/carrito" class="carrito-link">
        🛒 Carrito
        <span v-if="carrito.cantidad > 0" class="badge">
          {{ carrito.cantidad }}
        </span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
import { useCarritoStore } from "@/stores/carrito";

export default {
  name: "NavBar",

  data() {
    return {
      abierto: false
    };
  },

  setup() {
    const carrito = useCarritoStore();
    return { carrito };
  },

  methods: {
    goTo(ruta) {
      this.$router.push(ruta);
      this.abierto = false;
    }
  }
};
</script>

<style scoped>
.sidebar {
  background: linear-gradient(to bottom, #0b2e1a, #061a10);
  padding: 30px 24px;
  width: 260px;
  min-height: 100vh;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.6);
}

.brand {
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
}

.logo {
  font-size: 2.4rem;
}

.brand-name {
  display: block;
  margin-top: 6px;
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #39ff14;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.menu a {
  color: #e6ffe6;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.menu a:hover {
  color: var(--verde-herbal);
  transform: translateX(6px);
}

.menu a.router-link-exact-active {
  color: var(--verde-herbal);
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}

.carrito-link {
  margin-top: 20px;
  background: rgba(57, 255, 20, 0.12);
  padding: 10px 14px;
  border-radius: 12px;
  position: relative;
}

.badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background: #39ff14;
  color: #000;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 7px;
  border-radius: 999px;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
    min-height: auto;
  }

  .menu-toggle {
    display: block;
  }

  .menu {
    display: none;
  }

  .menu.abierto {
    display: flex;
  }
}
</style>
