<template>
  <section class="container">
    <h1>Contacto</h1>
    <p>
      Escríbenos para pedidos, dudas o asesoría personalizada sobre nuestros
      productos.
    </p>

    <button @click="contactar">Contactar por WhatsApp</button>
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
