<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />

    <h3>{{ product.name }}</h3>
    <p class="beneficio">{{ product.benefit }}</p>
    
    <p class="precio">${{ product.price }}</p>

    <button @click="$emit('add-to-cart', product)">Agregar al carrito</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product-card {
  background: var(--crema-natural);
  padding: 20px;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow);
}

.product-card img {
  height: 180px;
  object-fit: cover;
  width: 100%;
}

.precio {
  margin-top: 10px;
  font-size: 1.2rem;
  color: var(--verde-herbal);
  font-weight: bold;
}
</style>

