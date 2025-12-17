<template>
  <section>
    <!-- TÍTULO -->
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-verde">
        Gestión de Productos
      </h1>

      <router-link
        to="/admin/productos/nuevo"
        class="btn-primary"
      >
        + Nuevo producto
      </router-link>
    </div>

    <!-- LISTA -->
    <div
      v-if="productos.length"
      class="space-y-4"
    >
      <div
        v-for="producto in productos"
        :key="producto.id"
        class="admin-card flex items-center gap-6"
      >
        <!-- Imagen -->
        <img
          :src="producto.imagen"
          :alt="producto.nombre"
          class="w-20 h-20 object-cover rounded-xl"
        />

        <!-- Info -->
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-verde">
            {{ producto.nombre }}
          </h3>

          <p class="text-gray-400 text-sm">
            $ {{ producto.precio }} / lb
          </p>
        </div>

        <!-- Acciones -->
        <div class="flex gap-3">
          <router-link
            :to="`/admin/productos/${producto.id}`"
            class="btn-outline"
          >
            Editar
          </router-link>

          <button
            @click="eliminarProducto(producto.id)"
            class="btn-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>

    <!-- VACÍO -->
    <div
      v-else
      class="card-dark text-center text-gray-400"
    >
      No hay productos registrados
    </div>
  </section>
</template>

<script>
import { useProductosStore } from "@/stores/productos";

export default {
  name: "ProductosAdmin",

  data() {
    return {
      productosStore: useProductosStore()
    };
  },

  async mounted() {
    await this.productosStore.cargarProductos();
  },

  computed: {
    productos() {
      return this.productosStore.productos;
    }
  },

  methods: {
    eliminarProducto(id) {
      const confirmar = confirm(
        "¿Estás seguro de eliminar este producto?"
      );

      if (!confirmar) return;

      this.productosStore.eliminarProducto(id);
    }
  }
};
</script>


<style scoped>
.admin-card {
  background: #111814;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
}

/* Botones admin */
.btn-outline {
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid var(--verde-herbal);
  color: var(--verde-herbal);
  font-weight: 600;
  transition: all 0.25s ease;
}

.btn-outline:hover {
  background: rgba(57, 255, 20, 0.15);
}

.btn-danger {
  padding: 10px 16px;
  border-radius: 10px;
  background: rgba(255, 60, 60, 0.15);
  color: #ff6b6b;
  font-weight: 700;
  transition: all 0.25s ease;
}

.btn-danger:hover {
  background: rgba(255, 60, 60, 0.3);
}
</style>
