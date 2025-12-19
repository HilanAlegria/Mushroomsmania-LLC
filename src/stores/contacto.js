import { defineStore } from "pinia";

export const useContactoStore = defineStore("contacto", {
  state: () => ({
    contacto: {
      titulo: "Contáctanos",
      descripcion:
        "Estamos aquí para ayudarte con pedidos, dudas o asesoría personalizada.",

      whatsapp: "57TU_NUMERO",

      directo: {
        titulo: "Contacto directo",
        texto: "Escríbenos directamente y te responderemos lo antes posible.",
        boton: "Contactar por WhatsApp"
      },

      redes: {
        titulo: "Redes sociales",
        texto:
          "Síguenos y conoce más sobre nuestros productos, recetas y beneficios.",
        items: [
          { nombre: "Instagram", url: "#" },
          { nombre: "Facebook", url: "#" },
          { nombre: "TikTok", url: "#" }
        ]
      }
    }
  }),

  getters: {
    data: (state) => state.contacto
  },

  actions: {
    cargar() {
      // Datos locales por ahora
      return;
    },

    actualizar(data) {
      this.contacto = { ...this.contacto, ...data };
    }
  }
});
