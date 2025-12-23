<template>
  <section class="nosotros">
    <h1 class="title">
      Sobre <span>MUSHROOMANIA</span> 🍄
    </h1>

    <div class="cards" v-if="nosotros">
      <div class="card-nosotros">
        <h2>Misión</h2>
        <p>
          {{ nosotros.mision }}
        </p>
      </div>

      <div class="card-nosotros">
        <h2>Visión</h2>
        <p>
          {{ nosotros.vision }}
        </p>
      </div>

      <div class="card-nosotros">
        <h2>Objetivo General</h2>
        <p>
          {{ nosotros.objetivo }}
        </p>
      </div>
    </div>

    <div class="contacto-nosotros">
      <h2>Contáctanos</h2>

      <p>
        Escríbenos para pedidos, asesoría personalizada o dudas sobre nuestros
        hongos medicinales.
      </p>

      <div class="redes">
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">TikTok</a>
      </div>
    </div>

  </section>
</template>

<script>
import { useNosotrosStore } from "@/stores/nosotros";

export default {
  name: "SobreNosotros",
  data() {
    return {
      store: useNosotrosStore()
    };
  },
  mounted() {
    this.store.cargar();
  },
  computed: {
    nosotros() {
      return this.store.data;
    }
  }
};
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

.cards {
  display: grid;
  gap: 35px;
}

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
.contacto-nosotros {
  margin-top: 80px;
  padding: 40px;
  border-radius: 20px;
  background: rgba(15, 20, 15, 0.85);
  border: 1px solid rgba(57, 255, 20, 0.25);
}

.contacto-nosotros h2 {
  font-size: 2rem;
  color: var(--verde-herbal);
  margin-bottom: 15px;
}

.contacto-nosotros p {
  color: #d6d6d6;
  margin-bottom: 20px;
  max-width: 600px;
}

.redes {
  display: flex;
  gap: 20px;
}

.redes a {
  color: #39ff14;
  font-weight: 600;
  text-decoration: none;
}

.redes a:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .nosotros {
    padding: 60px 25px;
  }

  .title {
    font-size: 2.3rem;
  }
}
</style>
