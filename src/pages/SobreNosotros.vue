<template>
  <section class="nosotros">
    <h1 class="title">Sobre <span>MUSHROOMANIA</span> 🍄</h1>

    <div class="cards">
      <div class="card-nosotros">
        <h2>Misión</h2>
        <p>
          Ofrecer productos naturales de hongos de la más alta calidad,
          promoviendo la salud y el bienestar de nuestros clientes.
        </p>
      </div>

      <div class="card-nosotros">
        <h2>Visión</h2>
        <p>
          Ser la empresa líder en productos de hongos, reconocida por su
          innovación, calidad y compromiso con el bienestar de las familias.
        </p>
      </div>

      <div class="card-nosotros">
        <h2>Objetivo General</h2>
        <p>
          Mejorar la salud y el bienestar de las familias a través de productos
          naturales de hongos, contribuyendo a su crecimiento integral.
        </p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "SobreNosotros"
}
</script>

<style scoped>
.nosotros {
  padding: 80px 60px;
  color: #eaeaea;
  max-width: 1100px;
  margin: auto;
}

/* TÍTULO */
.title {
  font-size: 3rem;
  margin-bottom: 60px;
  color: #fff;
}

.title span {
  color: var(--verde-herbal);
  text-shadow: 0 0 12px rgba(57, 255, 20, 0.4);
}

/* CONTENEDOR DE CARDS */
.cards {
  display: grid;
  gap: 35px;
}

/* CARD */
.card-nosotros {
  background: rgba(15, 20, 15, 0.85);
  border: 1px solid rgba(57, 255, 20, 0.25);
  border-radius: 18px;
  padding: 35px;
  box-shadow:
    0 0 25px rgba(0, 0, 0, 0.6),
    inset 0 0 15px rgba(57, 255, 20, 0.05);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-nosotros:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 35px rgba(57, 255, 20, 0.35),
    inset 0 0 20px rgba(57, 255, 20, 0.08);
}

/* TÍTULOS INTERNOS */
.card-nosotros h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: var(--verde-herbal);
}

.card-nosotros p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #d6d6d6;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nosotros {
    padding: 60px 25px;
  }

  .title {
    font-size: 2.3rem;
  }
}
</style>
