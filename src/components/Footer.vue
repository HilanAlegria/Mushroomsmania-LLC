<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-left">
        <h2>MushrooMania</h2>
        <p>Hongos naturales para tu salud y bienestar.</p>
      </div>

      <div class="footer-middle">
        <h3>Enlaces</h3>
        <a @click="$router.push('/')">Inicio</a>
        <a @click="$router.push('/productos')">Productos</a>
        <a @click="$router.push('/recetas')">Recetas</a>
        <a @click="$router.push('/contacto')">Contacto</a>
      </div>

      <div class="footer-right">
        <h3>Contáctanos</h3>
        <a href="https://wa.me/57TU_NUMERO" target="_blank">WhatsApp</a>
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">Facebook</a>
      </div>

    </div>

    <div class="footer-bottom">
      © 2025 MushrooMania. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background: #8B6F47;
  color: white;
  padding: 40px 20px 10px;
}

.footer-container {
  max-width: 1300px;
  margin: auto;
  display: grid;
  gap: 40px;
}

@media(min-width: 768px) {
  .footer-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-left h2 {
  margin-bottom: 10px;
}

.footer-middle a,
.footer-right a {
  display: block;
  color: white;
  text-decoration: none;
  margin-top: 5px;
  font-size: 0.95rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 10px;
}
</style>
