<template>
  <section class="admin-page max-w-6xl mx-auto">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-verde">
        Gestión de Recetas
      </h1>

      <router-link
        to="/admin/recetas/nueva"
        class="btn-primary"
      >
        + Nueva receta
      </router-link>
    </div>

    <!-- LISTA -->
    <div v-if="recetas.length" class="space-y-4">
      <div
        v-for="receta in recetas"
        :key="receta.id"
        class="admin-card flex items-center gap-6"
      >
        <img
          :src="receta.imagen"
          :alt="receta.nombre"
          class="w-20 h-20 object-cover rounded-xl"
        />

        <div class="flex-1">
          <h3 class="text-lg font-semibold text-verde">
            {{ receta.nombre }}
          </h3>

          <p class="text-gray-400 text-sm">
            {{ receta.slug }}
          </p>
        </div>

        <div class="flex gap-3">
          <router-link
            :to="`/admin/recetas/${receta.id}`"
            class="btn-outline"
          >
            Editar
          </router-link>

          <button
            @click="eliminarReceta(receta.id)"
            class="btn-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>

    <!-- VACÍO -->
    <div
      v-else
      class="admin-card text-center text-gray-400"
    >
      No hay recetas registradas
    </div>
  </section>
</template>

<script>
import { useRecetasStore } from "@/stores/recetas";

export default {
  name: "RecetasAdmin",

  data() {
    return {
      recetasStore: useRecetasStore()
    };
  },

  async mounted() {
    await this.recetasStore.cargarRecetas();
  },

  computed: {
    recetas() {
      return this.recetasStore.recetas;
    }
  },

  methods: {
    eliminarReceta(id) {
      const confirmar = confirm(
        "¿Seguro que deseas eliminar esta receta?"
      );

      if (!confirmar) return;

      this.recetasStore.eliminarReceta(id);
    }
  }
};
</script>