<template>
  <div class="app-layout">
    <NavBar v-if="!esAdmin" />
    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>

  <Footer v-if="!esAdmin" />
  <AdminToggle />

<a
  href="https://wa.me/17182080924?text=Hola%20,%20estoy%20interesado%20en%20sus%20productos%20de%20MushrooMania%20🍄.%20¿Podrían%20brindarme%20más%20información?"
  target="_blank"
  class="whatsapp-float"
  aria-label="WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    class="whatsapp-icon"
  >
    <path
      fill="currentColor"
      d="M19.11 17.2c-.28-.14-1.64-.8-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.72.9-.88 1.08-.16.18-.32.2-.6.06-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.06-.34-.02-.48-.08-.14-.62-1.5-.86-2.06-.23-.54-.46-.46-.62-.46h-.54c-.18 0-.48.06-.72.34-.25.28-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.86.14.18 1.94 2.96 4.7 4.14.66.28 1.18.44 1.58.56.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.06-.11-.23-.18-.5-.32zM16 3C9.37 3 4 8.37 4 15c0 2.65.86 5.1 2.32 7.08L4 29l7.12-2.3A11.9 11.9 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3z"
    />
  </svg>
</a>

</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import AdminToggle from "./components/AdminToggle.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    AdminToggle
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

.content {
  margin-left: 220px;
  width: calc(100% - 220px);
  min-height: 100vh;
}

@media (min-width: 1025px) {
  .content {
    margin-left: 0;
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .app-layout {
    flex-direction: column;
  }

  .content {
    margin-left: 0;
    width: 100%;
  }
}

.whatsapp-float {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 25px rgba(37, 211, 102, 0.6);
  z-index: 999;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.whatsapp-float:hover {
  transform: scale(1.15);
  box-shadow: 0 0 40px rgba(37, 211, 102, 0.85);
}

.whatsapp-icon {
  width: 32px;
  height: 32px;
}

</style>
