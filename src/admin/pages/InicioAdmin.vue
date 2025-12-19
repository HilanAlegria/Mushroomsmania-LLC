<template>
  <section class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-verde mb-10">
      Inicio del sitio
    </h1>

    <div class="admin-card space-y-6">

      <!-- TÍTULO -->
      <input
        v-model="inicio.titulo"
        type="text"
        placeholder="Título principal"
        class="admin-input"
      />

      <!-- SUBTÍTULO -->
      <input
        v-model="inicio.subtitulo"
        type="text"
        placeholder="Subtítulo"
        class="admin-input"
      />

      <!-- IMAGEN -->
      <div>
        <label class="block text-verde font-semibold mb-2">
          Imagen principal
        </label>

        <input
          type="file"
          accept="image/*"
          @change="cargarImagen"
          class="admin-input"
        />

        <img
          v-if="inicio.imagen"
          :src="inicio.imagen"
          class="w-full h-56 object-cover rounded-xl mt-4"
        />
      </div>

      <!-- TEXTO BOTÓN -->
      <input
        v-model="inicio.textoBoton"
        type="text"
        placeholder="Texto del botón"
        class="admin-input"
      />

      <!-- LINK BOTÓN -->
      <input
        v-model="inicio.linkBoton"
        type="text"
        placeholder="Link del botón (ej: /productos)"
        class="admin-input"
      />

      <!-- ACCIONES -->
      <div class="flex justify-end pt-6">
        <button
          @click="guardar"
          class="btn-primary"
        >
          Guardar cambios
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import { useInicioStore } from "@/stores/inicio";

export default {
  name: "InicioAdmin",

  data() {
    return {
      inicioStore: useInicioStore(),
      inicio: {
        titulo: "",
        subtitulo: "",
        imagen: "",
        textoBoton: "",
        linkBoton: ""
      }
    };
  },

  async mounted() {
    await this.inicioStore.cargarInicio?.();

    if (this.inicioStore.inicio) {
      this.inicio = JSON.parse(
        JSON.stringify(this.inicioStore.inicio)
      );
    }
  },

  methods: {
    cargarImagen(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        this.inicio.imagen = reader.result;
      };
      reader.readAsDataURL(file);
    },

    guardar() {
      this.inicioStore.guardarInicio(this.inicio);
      alert("Inicio actualizado correctamente");
    }
  }
};
</script>
