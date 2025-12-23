<template>
  <aside class="admin-sidebar">
    <!-- LOGO + NOMBRE -->
    <div class="admin-brand" @click="$router.push('/admin')">
      <img
        :src="logo"
        alt="MushrooMania"
        class="admin-logo"
      />
      <span class="admin-title">Admin</span>
    </div>

    <nav class="admin-menu">
      <router-link to="/admin">📊 Dashboard</router-link>
      <router-link to="/admin/inicio">🏠 Inicio</router-link>
      <router-link to="/admin/productos">📦 Productos</router-link>
      <router-link to="/admin/recetas">📖 Recetas</router-link>
      <router-link to="/admin/nosotros">👥 Nosotros</router-link>
      <router-link to="/admin/beneficios">🌱 Beneficios</router-link>
      <router-link to="/">🌍 Volver al sitio</router-link>
    </nav>
  </aside>
</template>

<script>
import logo from "@/assets/logo-MushrooMania.png";

export default {
  name: "AdminSidebar",
  data() {
    return {
      logo
    };
  }
};
</script>

<style scoped>
.admin-sidebar {
  width: 240px;
  background: linear-gradient(to bottom, #0b2e1a, #061a10);
  padding: 30px 20px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.6);
}

/* BRAND */
.admin-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 50px;
  cursor: pointer;
}

.admin-logo {
  width: 38px;
  height: 38px;
  object-fit: contain;
}

.admin-title {
  line-height: 1;
}

/* MENU */
.admin-menu {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.admin-menu a {
  color: #e6ffe6;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding-left: 10px;
  transition: all 0.25s ease;
}

.admin-menu a:hover {
  color: var(--verde-herbal);
  transform: scale(1.1);
}

.admin-menu a.router-link-exact-active {
  color: var(--verde-herbal);
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
}
</style>
