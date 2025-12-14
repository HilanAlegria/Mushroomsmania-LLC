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
import melena from "@/assets/images/melena.jpg";
import reishi from "@/assets/images/reishi.jpg";
import cordyceps from "@/assets/images/cordyceps.jpg";

export default {
  name: "Recetas",
  data() {
    return {
      recetas: [
        {
          id: 1,
          nombre: "Té de Melena de León",
          descripcion: "Ideal para la concentración y la salud cognitiva.",
          imagen: melena
        },
        {
          id: 2,
          nombre: "Infusión de Reishi",
          descripcion: "Receta relajante para el equilibrio del cuerpo.",
          imagen: reishi
        },
        {
          id: 3,
          nombre: "Energizante de Cordyceps",
          descripcion: "Perfecto para vitalidad y rendimiento físico.",
          imagen: cordyceps
        }
      ]
    };
  }
};
</script>

<style scoped>
.recetas {
  padding: 60px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.recetas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.receta-card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.receta-card:hover {
  transform: translateY(-8px);
}

.receta-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.receta-card h3 {
  font-size: 1.3rem;
  margin: 15px;
}

.receta-card p {
  margin: 0 15px 15px;
  color: #555;
}

.receta-card button {
  margin: 0 15px 20px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: var(--verde-bosque);
  color: white;
  cursor: pointer;
}
</style>
