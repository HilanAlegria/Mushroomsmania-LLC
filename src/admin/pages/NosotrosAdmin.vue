<template>
  <section class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-verde mb-10">
      Sección Nosotros
    </h1>

    <div class="admin-card space-y-6">

      <input
        v-model="nosotros.titulo"
        type="text"
        placeholder="Título"
        class="admin-input"
      />

      <textarea
        v-model="nosotros.descripcion"
        placeholder="Descripción"
        class="admin-input h-36"
      ></textarea>

      <input
        type="file"
        accept="image/*"
        @change="cargarImagen"
        class="admin-input"
      />

      <img
        v-if="nosotros.imagen"
        :src="nosotros.imagen"
        class="w-full h-56 object-cover rounded-xl"
      />

      <div class="flex justify-end pt-6">
        <button class="btn-primary" @click="guardar">
          Guardar cambios
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import { useNosotrosStore } from "@/stores/nosotros";

export default {
  name: "NosotrosAdmin",

  data() {
    return {
      store: useNosotrosStore(),
      nosotros: {
        titulo: "",
        descripcion: "",
        imagen: ""
      }
    };
  },

  async mounted() {
    await this.store.cargar?.();

    if (this.store.data) {
      this.nosotros = JSON.parse(
        JSON.stringify(this.store.data)
      );
    }
  },

  methods: {
    cargarImagen(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        this.nosotros.imagen = reader.result;
      };
      reader.readAsDataURL(file);
    },

    guardar() {
      this.store.guardar(this.nosotros);
      alert("Sección Nosotros actualizada");
    }
  }
};
</script>
