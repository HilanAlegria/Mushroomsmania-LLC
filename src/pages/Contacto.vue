<template>
  <section class="py-24 px-6" v-if="contacto">
    <div class="max-w-5xl mx-auto">

      <!-- TÍTULO -->
      <h1 class="text-4xl font-bold text-[#2ecc00] mb-6">
        {{ contacto.titulo }}
      </h1>

      <p class="text-gray-300 max-w-2xl mb-16">
        {{ contacto.descripcion }}
      </p>

      <!-- GRID DE CONTACTO -->
      <div class="grid gap-10 md:grid-cols-2">

        <!-- CONTACTO DIRECTO -->
        <div class="card-dark">
          <h2 class="text-2xl font-semibold text-[#39ff14] mb-4">
            {{ contacto.directo.titulo }}
          </h2>

          <p class="text-gray-300 mb-6">
            {{ contacto.directo.texto }}
          </p>

          <button
            @click="contactar"
            class="btn-primary w-full md:w-auto"
          >
            {{ contacto.directo.boton }}
          </button>
        </div>

        <!-- REDES SOCIALES -->
        <div class="card-dark">
          <h2 class="text-2xl font-semibold text-[#39ff14] mb-4">
            {{ contacto.redes.titulo }}
          </h2>

          <p class="text-gray-300 mb-6">
            {{ contacto.redes.texto }}
          </p>

          <ul class="space-y-4">
            <li
              v-for="(red, i) in contacto.redes.items"
              :key="i"
            >
              <a
                :href="red.url"
                target="_blank"
                class="text-green-300 hover:text-[#39ff14] transition"
              >
                {{ red.nombre }}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { useContactoStore } from "@/stores/contacto";

export default {
  name: "Contacto",
  data() {
    return {
      store: useContactoStore()
    };
  },
  mounted() {
    this.store.cargar();
  },
  computed: {
  contacto() {
    return this.store.data;
  }
  },
  methods: {
    contactar() {
      if (!this.contacto?.whatsapp) return;
      window.open(`https://wa.me/${this.contacto.whatsapp}`, "_blank");
    }
  }
};
</script>