<template>
  <section class="py-24 px-6 max-w-5xl mx-auto">
    <h2 class="text-4xl font-bold text-verde mb-10 text-center">
      Tu carrito
    </h2>

    <!-- Carrito vacío -->
    <div
      v-if="carrito.items.length === 0"
      class="text-center card-dark"
    >
      <p class="text-gray-300 mb-6">
        Tu carrito está vacío
      </p>

      <router-link to="/productos" class="btn-primary">
        Ver productos
      </router-link>
    </div>

    <!-- Carrito con productos -->
    <div v-else class="space-y-6">
      <div
        v-for="item in carrito.items"
        :key="item.id + item.tipo"
        class="flex items-center gap-6 card-dark"
      >
        <img
          :src="item.imagen"
          :alt="item.nombre"
          class="w-20 h-20 object-cover rounded-xl"
        />

        <div class="flex-1">
          <h3 class="text-lg font-semibold text-verde">
            {{ item.nombre }}
          </h3>
          <p class="text-sm text-gray-400">
            {{ item.tipo }}
          </p>
        </div>

        <span class="font-bold text-verde">
          $ {{ item.precio }}
        </span>

        <button
          @click="carrito.eliminarProducto(item.id)"
          class="text-red-400 hover:text-red-500 font-bold"
        >
          ✕
        </button>
      </div>

      <!-- Total -->
      <div class="text-right mt-10">
        <p class="text-xl text-gray-300">
          Total:
          <span class="font-bold text-verde">
            $ {{ carrito.total }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { useCarritoStore } from "@/stores/carrito";

export default {
  name: "Carrito",
  setup() {
    const carrito = useCarritoStore();
    return { carrito };
  }
};
</script>
