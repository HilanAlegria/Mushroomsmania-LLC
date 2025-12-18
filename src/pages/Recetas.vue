<template>
  <section class="py-24 px-6 max-w-7xl mx-auto">
    <h2 class="text-4xl font-bold text-[#2ecc00] mb-14 text-center">
      Recetas con Hongos Medicinales
    </h2>

    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="receta in recetas"
        :key="receta.id"
        class="card-dark overflow-hidden"
      >
        <img
          :src="receta.imagen"
          :alt="receta.nombre"
          class="h-48 w-full object-cover mb-6"
        />

        <h3 class="text-xl font-semibold text-[#39ff14] mb-3">
          {{ receta.nombre }}
        </h3>

        <p class="text-gray-300 mb-6">
          {{ receta.descripcion }}
        </p>

        <router-link
          :to="`/recetas/${receta.slug}`"
          class="btn-primary w-full text-center block"
        >
          Ver receta
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useRecetasStore } from "@/stores/recetas";

export default {
  name: "Recetas",

  data() {
    return {
      recetasStore: useRecetasStore()
    };
  },

  async mounted() {
    this.recetasStore.cargarDesdeLocalStorage();
    await this.recetasStore.cargarRecetas();
  },

  computed: {
    recetas() {
      return this.recetasStore.recetas;
    }
  }
};
</script>
