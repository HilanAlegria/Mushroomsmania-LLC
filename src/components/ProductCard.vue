<template>
  <router-link
    :to="`/productos/${producto.slug}`"
    class="group bg-[#0d120f] rounded-2xl overflow-hidden border border-green-500/10
           shadow-lg hover:-translate-y-2 hover:shadow-green-500/30 transition"
  >
    <img
      :src="producto.imagen"
      :alt="producto.nombre"
      class="h-48 w-full object-cover"
  />

    <div class="p-6">
      <h3 class="text-xl font-semibold text-[#39ff14] mb-3">
        {{ producto.nombre }}
      </h3>

      <p class="text-gray-300 mb-6">
        {{ producto.descripcion }}
      </p>

      <div class="flex justify-between items-center">
        <span class="text-lg font-bold text-[#39ff14]">
          ${{ producto.precio }} / lb
        </span>

        <button
          @click.stop="agregar"
          class="bg-[#2ecc00] text-black font-bold px-4 py-2 rounded-lg
                 shadow-[0_0_18px_rgba(46,204,0,0.45)]
                 group-hover:shadow-[0_0_30px_rgba(46,204,0,0.75)]
                 transition transform group-hover:scale-105"
        >
          Agregar
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardProducto",
  props: {
    producto: Object
  },
  emits: ["add"],
  methods: {
    agregar() {
      this.$emit("add", this.producto)
    }
  }
}
</script>
