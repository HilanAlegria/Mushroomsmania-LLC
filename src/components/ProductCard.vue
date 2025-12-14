<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />

    <div class="info">
      <h3>{{ product.name }}</h3>
      <p class="benefit">{{ product.benefit }}</p>
      <p class="price">${{ product.price }}</p>

      <button @click="$emit('add-to-cart', product)">
        Agregar al carrito
      </button>
    </div>
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
  display: flex;
  flex-direction: column;
  background: var(--crema-natural);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-6px);
}

.product-card img {
  height: 220px;
  width: 100%;
  object-fit: cover;
}

.info {
  padding: 20px;
}

.benefit {
  margin: 10px 0;
  font-size: 0.95rem;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--verde-herbal);
  margin-bottom: 15px;
}
</style>
