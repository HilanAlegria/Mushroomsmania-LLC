<template>
  <section class="productos">
    <h2 class="section-title">Nuestros Productos</h2>

    <div class="productos-grid">
      <div
        class="producto-card"
        v-for="producto in productos"
        :key="producto.id"
      >
        <img :src="producto.imagen" :alt="producto.nombre" />

        <div class="producto-info">
          <h3>{{ producto.nombre }}</h3>
          <p>{{ producto.descripcion }}</p>

          <div class="producto-footer">
            <span class="precio">${{ producto.precio }}</span>
            <button>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import melena from "@/assets/images/melena.jpg";
import reishi from "@/assets/images/reishi.jpg";
import cordyceps from "@/assets/images/cordyceps.jpg";

export default {
  name: "Productos",
  data() {
  return {
    productos: [
      {
        id: 1,
        nombre: "Melena de León",
        descripcion: "Apoya la memoria, enfoque y salud cerebral.",
        precio: "15.00 / lb",
        imagen: melena
      },
      {
        id: 2,
        nombre: "Reishi",
        descripcion: "Ayuda al descanso, equilibrio y sistema inmune.",
        precio: "15.00 / lb",
        imagen: reishi
      },
      {
        id: 3,
        nombre: "Cordyceps",
        descripcion: "Aumenta energía y resistencia física.",
        precio: "15.00 / lb",
        imagen: cordyceps
      }
    ]
  };
}
};
</script>

<style scoped>
.productos {
  padding: 60px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.producto-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
}

.producto-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.producto-info {
  padding: 20px;
}

.producto-info h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.producto-info p {
  color: #555;
  margin-bottom: 20px;
}

.producto-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.precio {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--verde-bosque);
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  background: var(--verde-bosque);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

button:hover {
  transform: scale(1.08);
  background: var(--verde-herbal);
}
</style>
