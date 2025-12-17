<template>
  <header class="admin-header">
    <h2 class="admin-title">
      Panel de Administración
    </h2>

    <span class="admin-user">
      Admin
    </span>
  </header>
</template>

<script>
export default {
  name: "AdminHeader"
};
</script>

<style scoped>
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #0f1512;
  border-bottom: 1px solid rgba(57, 255, 20, 0.15);
}

.admin-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--verde-herbal);
}

.admin-user {
  font-size: 0.95rem;
  color: #9ae6a0;
}
</style>
