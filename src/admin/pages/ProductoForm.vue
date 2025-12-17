<template>
  <section class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-verde mb-10">
      {{ modoEdicion ? "Editar producto" : "Nuevo producto" }}
    </h1>

    <div class="admin-card space-y-6">

      <input
        v-model="producto.nombre"
        type="text"
        placeholder="Nombre del producto"
        class="admin-input"
      />

      <input
        v-model="producto.slug"
        type="text"
        placeholder="Slug (ej: melena-de-leon)"
        class="admin-input"
      />

      <input
        v-model.number="producto.precio"
        type="number"
        placeholder="Precio"
        class="admin-input"
      />

      <!-- IMAGEN DESDE PC -->
      <div>
        <label class="text-verde font-semibold mb-2 block">
          Imagen del producto
        </label>

        <input
          type="file"
          accept="image/*"
          @change="cargarImagen"
          class="admin-input"
        />

        <!-- Preview -->
        <img
          v-if="producto.imagen"
          :src="producto.imagen"
          alt="Preview"
          class="mt-4 w-40 h-40 object-cover rounded-xl border border-green-500/40"
        />
      </div>

      <textarea
        v-model="producto.descripcion"
        placeholder="Descripción"
        class="admin-input h-28"
      ></textarea>

      <!-- Beneficios -->
      <div>
        <h3 class="text-verde font-semibold mb-2">
          Beneficios
        </h3>

        <div class="flex gap-3 mb-3">
          <input
            v-model="beneficioTemp"
            type="text"
            placeholder="Agregar beneficio"
            class="admin-input flex-1"
          />
          <button @click="agregarBeneficio" class="btn-outline">
            +
          </button>
        </div>

        <ul class="space-y-2">
          <li
            v-for="(b, i) in producto.beneficios"
            :key="i"
            class="flex justify-between items-center text-gray-300"
          >
            {{ b }}
            <button
              @click="eliminarBeneficio(i)"
              class="text-red-400 font-bold"
            >
              ✕
            </button>
          </li>
        </ul>
      </div>

      <!-- Acciones -->
      <div class="flex justify-end gap-4 pt-6">
        <router-link
          to="/admin/productos"
          class="btn-outline"
        >
          Cancelar
        </router-link>

        <button
          @click="guardarProducto"
          class="btn-primary"
        >
          Guardar
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import { useProductosStore } from "@/stores/productos";

export default {
  name: "ProductoForm",

  data() {
    return {
      productosStore: useProductosStore(),
      modoEdicion: false,
      producto: {
        id: null,
        nombre: "",
        slug: "",
        precio: 0,
        imagen: "",
        descripcion: "",
        beneficios: []
      },
      beneficioTemp: ""
    };
  },

  async mounted() {
    await this.productosStore.cargarProductos();

    const id = this.$route.params.id;

    if (id) {
      const existente = this.productosStore.productos.find(
        p => p.id == id
      );

      if (existente) {
        this.producto = JSON.parse(JSON.stringify(existente));
        this.modoEdicion = true;
      }
    }
  },

  methods: {
    cargarImagen(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        this.producto.imagen = reader.result;
      };

      reader.readAsDataURL(file);
    },

    agregarBeneficio() {
      if (!this.beneficioTemp) return;
      this.producto.beneficios.push(this.beneficioTemp);
      this.beneficioTemp = "";
    },

    eliminarBeneficio(index) {
      this.producto.beneficios.splice(index, 1);
    },

    guardarProducto() {
      if (!this.producto.nombre || !this.producto.precio) {
        alert("Nombre y precio son obligatorios");
        return;
      }

      if (this.modoEdicion) {
        this.productosStore.actualizarProducto(this.producto);
      } else {
        this.productosStore.agregarProducto(this.producto);
      }

      this.$router.push("/admin/productos");
    }
  }
};
</script>
