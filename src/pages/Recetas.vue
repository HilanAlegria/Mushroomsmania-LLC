<template>
  <section class="recetas">
    <h2 class="section-title">Recetas con Hongos Medicinales</h2>

    <div class="recetas-grid">
      <div class="receta-card" v-for="receta in recetas" :key="receta.id">
        <img :src="receta.imagen" :alt="receta.nombre" />
        <h3>{{ receta.nombre }}</h3>
        <p>{{ receta.descripcion }}</p>
        <button>Ver receta</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Recetas",
  data() {
    return {
      recetas: [
        {
          id: 1,
          nombre: "Té de Melena de León",
          descripcion: "Ideal para la concentración y la salud cognitiva.",
          imagen: "/images/melena.jpg"
        },
        {
          id: 2,
          nombre: "Infusión de Reishi",
          descripcion: "Receta relajante para el equilibrio del cuerpo.",
          imagen: "/images/reishi.jpg"
        },
        {
          id: 3,
          nombre: "Energizante de Cordyceps",
          descripcion: "Perfecto para vitalidad y rendimiento físico.",
          imagen: "/images/cordyceps.jpg"
        }
      ]
    };
  }
};

</script>

<style scoped>
.recetas {
  padding: 70px 24px;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 50px;
  color: var(--verde-bosque);
}

.recetas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 35px;
}

.receta-card {
  background: #0d120f;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.receta-card:hover {
  transform: translateY(-8px);
  box-shadow:
    var(--shadow-hover),
    0 0 25px rgba(57, 255, 20, 0.25);
}

.receta-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.receta-card h3 {
  font-size: 1.4rem;
  margin: 15px;
  color: var(--verde-bosque);
}

.receta-card p {
  margin: 0 15px 20px;
  color: #cfcfcf;
}

.receta-card button {
  margin: 0 15px 25px;
  background: var(--verde-herbal);
  color: #041b00;
  font-weight: 700;
  box-shadow: 0 0 18px rgba(46, 204, 0, 0.45);
}

.receta-card button:hover {
  box-shadow: 0 0 30px rgba(46, 204, 0, 0.75);
}

</style>
