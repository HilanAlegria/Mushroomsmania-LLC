<template>
  <section class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-verde mb-10">
      Beneficios
    </h1>

    <div class="admin-card space-y-6">

      <div class="flex gap-3">
        <input
          v-model="beneficioTemp"
          type="text"
          placeholder="Agregar beneficio"
          class="admin-input flex-1"
        />
        <button class="btn-outline" @click="agregar">
          +
        </button>
      </div>

      <ul class="space-y-3">
        <li
          v-for="(b, i) in beneficios"
          :key="i"
          class="flex justify-between items-center text-gray-700"
        >
          {{ b }}
          <button
            @click="eliminar(i)"
            class="text-red-500 font-bold"
          >
            ✕
          </button>
        </li>
      </ul>

      <div class="flex justify-end pt-6">
        <button class="btn-primary" @click="guardar">
          Guardar cambios
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import { useBeneficiosStore } from "@/stores/beneficios";

export default {
  name: "BeneficiosAdmin",

  data() {
    return {
      store: useBeneficiosStore(),
      beneficios: [],
      beneficioTemp: ""
    };
  },

  mounted() {
    this.store.cargar();
    this.beneficios = [...this.store.beneficios];
  },

  methods: {
    agregar() {
      if (!this.beneficioTemp) return;
      this.beneficios.push(this.beneficioTemp);
      this.beneficioTemp = "";
    },

    eliminar(index) {
      this.beneficios.splice(index, 1);
    },

    guardar() {
      this.store.guardar(this.beneficios);
      alert("Beneficios actualizados");
    }
  }
};
</script>
