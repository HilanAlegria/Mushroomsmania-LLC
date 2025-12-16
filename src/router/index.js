import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Productos from '../pages/Productos.vue';
import ProductoDetalle from '../pages/ProductoDetalle.vue';
import Recetas from '../pages/Recetas.vue';
import Beneficios from '../pages/Beneficios.vue';
import SobreNosotros from '../pages/SobreNosotros.vue';
import Contacto from '../pages/Contacto.vue';
import Carrito from '../pages/Carrito.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/productos', component: Productos },
  {
    path: '/productos/:slug',
    component: ProductoDetalle
  },
  { path: '/beneficios', component: Beneficios },
  { path: '/recetas', component: Recetas },
  { path: '/sobre-nosotros', component: SobreNosotros },
  { path: '/carrito', component: Carrito },
  { path: '/contacto', component: Contacto }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
