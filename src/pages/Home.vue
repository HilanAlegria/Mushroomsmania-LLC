<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero" :style="heroStyle">
        <div class="hero-content">
            <h1>Mushroomsmania</h1>
            <p>Hongos naturales, gourmet y medicinales para tu bienestar.</p>
            <button @click="$router.push('/productos')">Ver Productos</button>
        </div>
    </section>


    <!-- MISIÓN / VISIÓN -->
    <section class="info-section">
      <h2>Nuestra esencia</h2>

      <div class="info-grid">
        <div class="info-card">
          <h3>Misión</h3>
          <p>Ofrecer productos naturales de hongos de la más alta calidad, promoviendo la salud y el bienestar.</p>
        </div>

        <div class="info-card">
          <h3>Visión</h3>
          <p>Ser líderes en productos de hongos, reconocidos por innovación, calidad y compromiso con las familias.</p>
        </div>

        <div class="info-card">
          <h3>Objetivo general</h3>
          <p>Mejorar la salud y el bienestar de las familias mediante productos naturales a base de hongos.</p>
        </div>
      </div>
    </section>

    <!-- BENEFICIOS -->
    <section class="beneficios">
      <h2>Beneficios de nuestros hongos</h2>

      <div class="beneficios-grid">
        <div class="beneficio-card">
          <h3>Melena de León</h3>
          <p>Apoyo cognitivo, memoria y energía mental.</p>
        </div>

        <div class="beneficio-card">
          <h3>Pio Pino</h3>
          <p>Antioxidantes, fibra y sabor umami ideal para recetas.</p>
        </div>

        <div class="beneficio-card">
          <h3>Oyster Italiano</h3>
          <p>Proteína vegetal, versátil y perfecto para cocina saludable.</p>
        </div>
      </div>
    </section>

    <!-- RECETAS -->
    <section class="recetas">
      <h2>Recetas destacadas</h2>
      <div class="recetas-grid">

        <div class="receta-card">
          <h3>Carpaccio de Portobello</h3>
          <p>Ideal como entrada ligera y llena de sabor.</p>
        </div>

        <div class="receta-card">
          <h3>Tacos de hongos</h3>
          <p>Suaves, jugosos y perfectos para una cena saludable.</p>
        </div>

        <div class="receta-card">
          <h3>Crema de hongos al coco</h3>
          <p>Un toque exótico para tus comidas.</p>
        </div>
      </div>
    </section>

    <!-- CTA CONTACTO -->
    <section class="contacto">
      <h2>¿Quieres saber más o hacer un pedido?</h2>
      <button @click="contactar">Contactar por WhatsApp</button>
    </section>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      heroImages: [
        '/src/assets/images/melena.jpg',
        '/src/assets/images/piopino.jpg',
        '/src/assets/images/oyster.jpg'
      ],
      heroStyle: {}
    }
  },
  created() {
    const randomImg = this.heroImages[Math.floor(Math.random() * this.heroImages.length)];
    this.heroStyle = {
      background: `url(${randomImg}) center/cover no-repeat`
    };
  },
  methods: {
    contactar() {
      window.open("https://wa.me/57TU_NUMERO", "_blank");
    }
  }
}
</script>


<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.hero {
  padding: 160px 20px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
}

.hero-content {
  position: relative;
  z-index: 2;
}


/* SECCIONES */
.info-section,
.beneficios,
.recetas,
.contacto {
  padding: 60px 20px;
  text-align: center;
}

/* GRID */
.info-grid,
.beneficios-grid,
.recetas-grid {
  display: grid;
  gap: 20px;
  margin-top: 40px;
}

@media(min-width: 768px) {
  .info-grid,
  .beneficios-grid,
  .recetas-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* CARDS */
.info-card,
.beneficio-card,
.receta-card {
  padding: 20px;
  background: #F5F5DC;
  border-radius: 12px;
  border: 1px solid #DDD;
}

/* CTA CONTACTO */
.contacto button {
  padding: 12px 24px;
  background: #2F4F4F;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
