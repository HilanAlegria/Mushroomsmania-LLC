<template>
  <section class="py-24 px-6">
    <div class="max-w-5xl mx-auto">

      <!-- TÍTULO -->
      <h1 class="text-4xl font-bold text-[#2ecc00] mb-6">
        Contáctanos
      </h1>

      <p class="text-gray-300 max-w-2xl mb-16">
        Estamos aquí para ayudarte con pedidos, dudas o asesoría personalizada
        sobre nuestros hongos medicinales y productos naturales.
      </p>

      <!-- GRID DE CONTACTO -->
      <div class="grid gap-10 md:grid-cols-2">

        <!-- CONTACTO DIRECTO -->
        <div class="card-dark">
          <h2 class="text-2xl font-semibold text-[#39ff14] mb-4">
            Contacto directo
          </h2>

          <p class="text-gray-300 mb-6">
            Escríbenos directamente y te responderemos lo antes posible.
          </p>

          <button
            @click="contactar"
            class="btn-primary w-full md:w-auto"
          >
            Contactar por WhatsApp
          </button>
        </div>

        <!-- REDES SOCIALES -->
        <div class="card-dark">
          <h2 class="text-2xl font-semibold text-[#39ff14] mb-4">
            Redes sociales
          </h2>

          <p class="text-gray-300 mb-6">
            Síguenos y conoce más sobre nuestros productos, recetas y beneficios.
          </p>

          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-green-300 hover:text-[#39ff14] transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-green-300 hover:text-[#39ff14] transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-green-300 hover:text-[#39ff14] transition"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacto",
  methods: {
    contactar() {
      window.open("https://wa.me/57TU_NUMERO", "_blank");
    }
  }
}
</script>
