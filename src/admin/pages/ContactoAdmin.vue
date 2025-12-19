<template>
  <section class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-verde mb-10">
      Información de Contacto
    </h1>

    <div class="admin-card space-y-6">

      <input
        v-model="contacto.telefono"
        type="text"
        placeholder="Teléfono"
        class="admin-input"
      />

      <input
        v-model="contacto.email"
        type="email"
        placeholder="Correo electrónico"
        class="admin-input"
      />

      <input
        v-model="contacto.direccion"
        type="text"
        placeholder="Dirección"
        class="admin-input"
      />

      <input
        v-model="contacto.whatsapp"
        type="text"
        placeholder="WhatsApp"
        class="admin-input"
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
import { useContactoStore } from "@/stores/contacto";

export default {
  name: "ContactoAdmin",

  data() {
    return {
      store: useContactoStore(),
      contacto: {
        telefono: "",
        email: "",
        direccion: "",
        whatsapp: ""
      }
    };
  },

  mounted() {
    this.store.cargar();
    this.contacto = JSON.parse(JSON.stringify(this.store.contacto));
  },

  methods: {
    guardar() {
      this.store.guardar(this.contacto);
      alert("Contacto actualizado");
    }
  }
};
</script>
