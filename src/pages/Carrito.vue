<template>
  <section class="carrito">
    <h2 class="section-title">Tu carrito</h2>

    <div class="carrito-vacio">
      <p>Tu carrito está vacío</p>
      <router-link to="/productos" class="btn">
        Ver productos
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carrito"
};
</script>

<style scoped>
.carrito {
  padding: 60px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.carrito-vacio {
  background: white;
  padding: 40px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.carrito-vacio p {
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background: var(--verde-bosque);
  color: white;
  text-decoration: none;
  border-radius: 10px;
}
</style>
