<template>
  <section class="hero" :style="heroStyle">
    <div class="overlay"></div>
    <!-- Indicadores -->
    <div class="hero-indicators">
      <span
        v-for="(img, index) in heroImages"
        :key="index"
        :class="{ active: currentIndex === index }"
      ></span>
    </div>
  </section>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      heroImages: [
        "/images/melena.jpg",
        "/images/piopino.jpg",
        "/images/oyster.jpg"
      ],
      currentIndex: 0,
      interval: null
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.heroImages.length;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${this.heroImages[this.currentIndex]})`
      };
    }
  }
};
</script>


<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: background-image 1s ease-in-out;
}

.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  z-index: 2;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}


/* Oscurecido elegante */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

/* Indicadores */
.hero-indicators {
  position: absolute;
  bottom: 30px;
  right: 40px;
  display: flex;
  gap: 10px;
  z-index: 2;
}

.hero-indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  transition: all 0.3s;
}

.hero-indicators span.active {
  background: white;
  transform: scale(1.2);
}
</style>
