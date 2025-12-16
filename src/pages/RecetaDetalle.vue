<template>
  <section
    v-if="receta"
    class="py-24 px-6 max-w-6xl mx-auto"
  >
    <div class="grid md:grid-cols-2 gap-14 items-start">

      <!-- Imagen -->
      <div class="flex justify-center">
        <img
          :src="receta.imagen"
          :alt="receta.nombre"
          class="w-full max-w-md h-[280px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      <!-- Información -->
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-verde mb-4">
          {{ receta.nombre }}
        </h1>

        <p class="text-gray-300 mb-8 max-w-prose">
          {{ receta.descripcion }}
        </p>

        <!-- Ingredientes -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-verde mb-3">
            Ingredientes
          </h2>

          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li v-for="(item, i) in receta.ingredientes" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Preparación -->
        <div class="mb-10">
          <h2 class="text-2xl font-bold text-verde mb-3">
            Preparación
          </h2>

          <ol class="list-decimal list-inside space-y-3 text-gray-300">
            <li v-for="(paso, i) in receta.pasos" :key="i">
              {{ paso }}
            </li>
          </ol>
        </div>

        <!-- BOTÓN CARRITO -->
        <button class="btn-primary" @click="agregarAlCarrito">
          Agregar al carrito
        </button>
      </div>

    </div>
  </section>

  <section
    v-else
    class="py-24 text-center text-gray-400"
  >
    Receta no encontrada
  </section>
</template>

<script>
import { useCarritoStore } from "@/stores/carrito";

export default {
  name: "RecetaDetalle",

  data() {
    return {
      receta: null
    };
  },

  async mounted() {
    const res = await fetch("/data/recetas.json");
    const recetas = await res.json();

    this.receta = recetas.find(
      r => r.slug === this.$route.params.slug
    );
  },

  methods: {
    agregarAlCarrito() {
      const carrito = useCarritoStore();

      carrito.items.push({
        id: this.receta.id,
        nombre: this.receta.nombre,
        precio: 0, // receta no se vende (por ahora)
        imagen: this.receta.imagen,
        tipo: "Receta"
      });
    }
  }
};
</script>
