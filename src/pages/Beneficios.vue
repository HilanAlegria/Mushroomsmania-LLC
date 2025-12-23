<template>
  <section class="py-24 px-6 max-w-5xl mx-auto" v-if="beneficios">
    <h1 class="text-4xl md:text-5xl font-bold text-[#2ecc00] mb-10">
      Beneficios de los Hongos Medicinales
    </h1>

    <p class="text-gray-300 text-lg max-w-3xl mb-16">
      {{ beneficios.intro }}
    </p>

    <div class="space-y-12">

      <div class="card-dark">
        <h2 class="text-2xl font-bold text-[#2ecc00] mb-4">
          Perfil nutricional general
        </h2>
        <ul class="space-y-3 text-green-100">
          <li v-for="(item, i) in beneficios.perfil" :key="i">
            • {{ item }}
          </li>
        </ul>
      </div>

      <div class="card-dark">
        <h2 class="text-2xl font-bold text-[#2ecc00] mb-4">
          🧠 Melena de León (Hericium erinaceus)
        </h2>
        <p class="text-gray-300 mb-6 max-w-3xl">
          {{ beneficios.melena.descripcion }}
        </p>
        <ul class="space-y-3 text-green-100">
          <li v-for="(item, i) in beneficios.melena.items" :key="i">
            • {{ item }}
          </li>
        </ul>
      </div>

      <div class="card-dark">
        <h2 class="text-2xl font-bold text-[#2ecc00] mb-4">
          🍄 Hongo Oyster (Pleurotus ostreatus)
        </h2>
        <p class="text-gray-300 mb-6 max-w-3xl">
          {{ beneficios.oyster.descripcion }}
        </p>
        <ul class="space-y-3 text-green-100">
          <li v-for="(item, i) in beneficios.oyster.items" :key="i">
            • {{ item }}
          </li>
        </ul>
      </div>

      <div class="card-dark">
        <h2 class="text-2xl font-bold text-[#2ecc00] mb-4">
          🍄 Beneficios generales
        </h2>
        <ul class="space-y-3 text-green-100">
          <li v-for="(item, i) in beneficios.generales" :key="i">
            • {{ item }}
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
import { useBeneficiosStore } from "@/stores/beneficios";

export default {
  name: "Beneficios",
  data() {
    return {
      store: useBeneficiosStore()
    };
  },
  mounted() {
    this.store.cargar();
  },
  computed: {
    beneficios() {
      return this.store.data;
    }
  }
};
</script>
