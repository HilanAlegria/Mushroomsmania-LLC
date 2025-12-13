import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Productos from '../pages/Productos.vue';
import Contacto from '../pages/Contacto.vue';
import Recetas from '../pages/Recetas.vue';
import Carrito from '../pages/Carrito.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/productos', component: Productos },
  { path: '/recetas', component: Recetas },
  { path: '/contacto', component: Contacto },
  { path: '/carrito', component: Carrito }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
