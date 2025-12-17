<template>
  <div class="app-layout">
    <!-- Menú lateral (solo público) -->
    <NavBar v-if="!esAdmin" />

    <!-- Contenido principal -->
    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>

  <!-- Footer SOLO público -->
  <Footer v-if="!esAdmin" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  computed: {
    esAdmin() {
      return this.$route.path.startsWith("/admin");
    }
  }
};
</script>

<style>
.app-layout {
  display: flex;
}

/* Contenido desplazado por el sidebar */
.content {
  margin-left: 220px;
  width: calc(100% - 220px);
  min-height: 100vh;
}

/* Responsive */
@media (max-width: 1024px) {
  .app-layout {
    flex-direction: column;
  }

  .content {
    margin-left: 0;
    width: 100%;
  }
}
</style>
