<template>
  <aside class="sidebar">
    <!-- TÍTULO / MARCA -->
    <h1 class="brand" @click="goTo('/')">
      <span class="brand-top">Mushroo</span>
      <span class="brand-bottom">Mania</span>
    </h1>


    <!-- MENÚ -->
    <nav class="menu">
      <a @click="goTo('/')">Inicio</a>
      <a @click="goTo('/productos')">Productos</a>
      <a @click="goTo('/beneficios')">Beneficios</a>
      <a @click="goTo('/recetas')">Recetas</a>
      <a @click="goTo('/contacto')">Contacto</a>
      <a @click="goTo('/carrito')">Carrito</a>
    </nav>
  </aside>
</template>


<script>
export default {
  name: "NavBar",
  methods: {
    goTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.sidebar {
  background: linear-gradient(
    to bottom,
    #0b2e1a,
    #061a10
  );
  padding: 40px 30px;      
  width: 260px;            
  min-height: 100vh;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.6);
}

/* ===== TÍTULO ===== */
.brand {
  color: white;
  cursor: pointer;
  text-align: left;
  margin-bottom: 60px;       
  line-height: 1.05;
}

/* Parte superior */
.brand-top {
  display: block;
  font-size: 2.2rem;    
  font-weight: 800;
}

/* Parte inferior */
.brand-bottom {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 6px;
}

/* Hover del título */
.brand:hover {
  color: var(--verde-herbal);
}

/* ===== MENÚ ===== */
.menu {
  display: flex;
  flex-direction: column;
  gap: 30px;      
}

/* LINKS */
.menu a {
  cursor: pointer;
  color: #e6ffe6;
  text-decoration: none;

  font-size: 1.6rem;     
  font-weight: 600;

  padding-left: 10px;    
  transition: transform 0.25s ease, color 0.25s ease;
  transform-origin: left center;
}

.menu a:hover {
  transform: scale(1.3) translateX(6px);
  color: var(--verde-herbal);
}

/* ===== RESPONSIVE NAVBAR ===== */

@media (max-width: 1024px) {
  .sidebar {
    width: 100%;
    min-height: auto;
    padding: 25px;
    flex-direction: row;
  }

  .brand {
    margin-bottom: 25px;
  }

  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  .menu a {
    font-size: 1.3rem;
  }

  .menu a:hover {
    transform: scale(1.15);
  }
}

/* ===== CELULARES ===== */

@media (max-width: 768px) {
  .menu {
    justify-content: center;
  }

  .brand-top,
  .brand-bottom {
    font-size: 1.6rem;
  }

  .menu a {
    font-size: 1.2rem;
  }
}
</style>

