<template>
  <div class="admin-layout">
    <AdminSidebar />

    <div class="admin-content">
      <AdminHeader />

      <main class="admin-page">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/admin/components/AdminSidebar.vue";
import AdminHeader from "@/admin/components/AdminHeader.vue";

export default {
  name: "AdminLayout",
  components: {
    AdminSidebar,
    AdminHeader
  }
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #0b0f0c;
}

.admin-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.admin-page {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .admin-page {
    padding: 24px;
  }
}
</style>
