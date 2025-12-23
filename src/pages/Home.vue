<template>
  <section class="hero">
    <div
      v-for="(img, index) in inicioStore.heroImages"
      :key="img"
      class="hero-slide"
      :class="{ active: currentIndex === index }"
      :style="{ backgroundImage: `url(${img})` }"
    ></div>

    <div class="overlay"></div>

    <div class="hero-indicators">
      <span
        v-for="(img, index) in inicioStore.heroImages"
        :key="index"
        :class="{ active: currentIndex === index }"
      ></span>
    </div>
  </section>
</template>

<script>
import { useInicioStore } from "@/stores/inicio";

export default {
  name: "Home",
  data() {
    return {
      inicioStore: useInicioStore(),
      currentIndex: 0,
      interval: null
    };
  },
  mounted() {
    this.inicioStore.cargar();

    this.interval = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) %
        this.inicioStore.heroImages.length;
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 60px); 
  overflow: hidden;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}

.hero-slide.active {
  opacity: 1;
  z-index: 1;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.55)
  );
  z-index: 2;
}

.hero-indicators {
  position: absolute;
  bottom: 30px;
  right: 40px;
  display: flex;
  gap: 10px;
  z-index: 3;
}

.hero-indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.hero-indicators span.active {
  background: white;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
  }

  .hero-indicators {
    right: 20px;
    bottom: 20px;
  }
}
</style>
