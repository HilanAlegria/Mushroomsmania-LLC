<template>
  <section v-if="producto" class="py-24 px-6 container-app">
    <div class="grid gap-14 md:grid-cols-2 items-center">

      <!-- Imagen controlada -->
      <div class="flex justify-center">
        <div class="relative w-full max-w-md overflow-hidden rounded-2xl">
          <img
            :src="producto.imagen"
            :alt="producto.nombre"
            class="w-full h-[320px] object-cover"
          />
        </div>
      </div>

      <!-- Info -->
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-[#2ecc00] mb-6">
          {{ producto.nombre }}
        </h1>

        <p class="text-gray-300 text-base md:text-lg mb-8 max-w-prose">
          {{ producto.descripcion }}
        </p>

        <ul class="space-y-3 mb-8">
          <li
            v-for="(beneficio, index) in producto.beneficios"
            :key="index"
            class="text-green-200"
          >
            ✔ {{ beneficio }}
          </li>
        </ul>

        <div class="text-2xl font-bold text-[#2ecc00] mb-8">
          $ {{ producto.precio }} / lb
        </div>

        <button class="btn-primary">
          Agregar al carrito
        </button>
      </div>

    </div>
  </section>
</template>



<script>
export default {
  name: "ProductoDetalle",
  data() {
    return { producto: null }
  },
  async mounted() {
    const res = await fetch("/data/productos.json")
    const productos = await res.json()
    this.producto = productos.find(
      p => p.slug === this.$route.params.slug
    )
  }
}
</script>
