import { defineStore } from "pinia";

export const useBeneficiosStore = defineStore("beneficios", {
  state: () => ({
    beneficios: {
      intro:
        "Los hongos comestibles son alimentos funcionales ricos en nutrientes y compuestos bioactivos.",
      general: [
        "Bajos en calorías y grasa",
        "Ricos en fibra y proteínas vegetales",
        "Contienen antioxidantes naturales",
        "Favorecen el metabolismo"
      ],
      melena: {
        nombre: "Melena de León",
        descripcion:
          "Conocida por sus posibles beneficios sobre la salud cerebral.",
        puntos: [
          "Estimula el factor de crecimiento nervioso (NGF)",
          "Apoya la memoria y concentración",
          "Contribuye a la salud digestiva"
        ]
      },
      oyster: {
        nombre: "Oyster",
        descripcion:
          "Hongo versátil y ampliamente estudiado por sus beneficios metabólicos.",
        puntos: [
          "Apoya el sistema inmune",
          "Contribuye a la salud cardiovascular",
          "Ayuda al control de la glucosa"
        ]
      }
    }
  }),

  getters: {
    data: (state) => state.beneficios
  },

  actions: {
    cargar() {
      // Datos locales por ahora
      return;
    }
  }
});
