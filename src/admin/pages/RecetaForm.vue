<template>
  <section class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-verde mb-10">
      {{ modoEdicion ? "Editar receta" : "Nueva receta" }}
    </h1>

    <div class="admin-card space-y-6">

      <!-- NOMBRE -->
      <input
        v-model="receta.nombre"
        @blur="generarSlug"
        type="text"
        placeholder="Nombre de la receta"
        class="admin-input"
      />

      <!-- SLUG -->
      <input
        v-model="receta.slug"
        type="text"
        placeholder="Slug (ej: infusion-reishi)"
        class="admin-input"
      />

      <!-- IMAGEN DESDE PC -->
      <input
        type="file"
        accept="image/*"
        @change="cargarImagen"
        class="admin-input"
      />

      <img
        v-if="receta.imagen"
        :src="receta.imagen"
        class="w-full h-48 object-cover rounded-xl"
      />

      <!-- DESCRIPCIÓN -->
      <textarea
        v-model="receta.descripcion"
        placeholder="Descripción"
        class="admin-input h-28"
      ></textarea>

      <!-- INGREDIENTES -->
      <div>
        <h3 class="text-verde font-semibold mb-2">
          Ingredientes
        </h3>

        <div class="flex gap-3 mb-3">
          <input
            v-model="ingredienteTemp"
            type="text"
            placeholder="Agregar ingrediente"
            class="admin-input flex-1"
          />
          <button @click="agregarIngrediente" class="btn-outline">
            +
          </button>
        </div>

        <ul class="space-y-2">
          <li
            v-for="(i, index) in receta.ingredientes"
            :key="index"
            class="flex justify-between text-gray-300"
          >
            {{ i }}
            <button
              @click="receta.ingredientes.splice(index, 1)"
              class="text-red-400 font-bold"
            >
              ✕
            </button>
          </li>
        </ul>
      </div>

      <!-- PASOS -->
      <div>
        <h3 class="text-verde font-semibold mb-2">
          Preparación
        </h3>

        <div class="flex gap-3 mb-3">
          <input
            v-model="pasoTemp"
            type="text"
            placeholder="Agregar paso"
            class="admin-input flex-1"
          />
          <button @click="agregarPaso" class="btn-outline">
            +
          </button>
        </div>

        <ol class="space-y-2 text-gray-300">
          <li
            v-for="(p, index) in receta.pasos"
            :key="index"
            class="flex justify-between"
          >
            {{ p }}
            <button
              @click="receta.pasos.splice(index, 1)"
              class="text-red-400 font-bold"
            >
              ✕
            </button>
          </li>
        </ol>
      </div>

      <!-- ACCIONES -->
      <div class="flex justify-end gap-4 pt-6">
        <router-link
          to="/admin/recetas"
          class="btn-outline"
        >
          Cancelar
        </router-link>

        <button
          @click="guardarReceta"
          class="btn-primary"
        >
          Guardar
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import { useRecetasStore } from "@/stores/recetas";

export default {
  name: "RecetaForm",

  data() {
    return {
      recetasStore: useRecetasStore(),
      modoEdicion: false,
      receta: {
        id: null,
        nombre: "",
        slug: "",
        imagen: "",
        descripcion: "",
        ingredientes: [],
        pasos: []
      },
      ingredienteTemp: "",
      pasoTemp: ""
    };
  },

  async mounted() {
    await this.recetasStore.cargarRecetas();

    const id = this.$route.params.id;

    if (id) {
      const existente = this.recetasStore.recetas.find(
        r => r.id == id
      );

      if (existente) {
        this.receta = JSON.parse(JSON.stringify(existente));
        this.modoEdicion = true;
      }
    }
  },

  methods: {
    generarSlug() {
      if (!this.receta.nombre) return;

      this.receta.slug = this.receta.nombre
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    },

    cargarImagen(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        this.receta.imagen = reader.result;
      };
      reader.readAsDataURL(file);
    },

    agregarIngrediente() {
      if (!this.ingredienteTemp) return;
      this.receta.ingredientes.push(this.ingredienteTemp);
      this.ingredienteTemp = "";
    },

    agregarPaso() {
      if (!this.pasoTemp) return;
      this.receta.pasos.push(this.pasoTemp);
      this.pasoTemp = "";
    },

    guardarReceta() {
      if (!this.receta.nombre) {
        alert("El nombre es obligatorio");
        return;
      }

      if (this.modoEdicion) {
        this.recetasStore.actualizarReceta(this.receta);
      } else {
        this.receta.id = Date.now();
        this.recetasStore.agregarReceta(this.receta);
      }

      this.$router.push("/admin/recetas");
    }
  }
};
</script>
