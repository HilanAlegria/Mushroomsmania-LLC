<template>
  <div class="app-layout">
    <!-- Menú lateral -->
    <NavBar />

    <!-- Contenido principal -->
    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <Footer />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
.app-layout {
  display: flex;
}

/* Espacio para el menú lateral */
.content {
  margin-left: 220px;
  width: calc(100% - 220px);
  min-height: 100vh;
}
</style>
