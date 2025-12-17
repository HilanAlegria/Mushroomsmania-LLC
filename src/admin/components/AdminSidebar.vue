<template>
  <aside class="admin-sidebar">
    <h1 class="admin-brand" @click="$router.push('/admin')">
      Admin 🍄
    </h1>

    <nav class="admin-menu">
      <router-link to="/admin">
        Dashboard
      </router-link>

      <router-link to="/admin/productos">
        Productos
      </router-link>

      <router-link to="/">
        Volver al sitio
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "AdminSidebar"
};
</script>

<style scoped>
.admin-sidebar {
  width: 240px;
  background: linear-gradient(to bottom, #0b2e1a, #061a10);
  padding: 30px 20px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.6);
}

.admin-brand {
  color: white;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 50px;
  cursor: pointer;
}

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
