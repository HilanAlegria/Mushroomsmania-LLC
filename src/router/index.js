import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Productos from "../pages/Productos.vue";
import ProductoDetalle from "../pages/ProductoDetalle.vue";
import Recetas from "../pages/Recetas.vue";
import Beneficios from "../pages/Beneficios.vue";
import Carrito from "../pages/Carrito.vue";
import Contacto from "../pages/Contacto.vue";
import SobreNosotros from "../pages/SobreNosotros.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/productos",
      component: Productos
    },
    {
      path: "/productos/:slug",
      component: ProductoDetalle
    },
    {
      path: "/beneficios",
      component: Beneficios
    },
    {
      path: "/recetas",
      component: Recetas
    },
    {
      path: "/carrito",
      component: Carrito
    },
    {
      path: "/contacto",
      component: Contacto
    },
    {
      path: "/sobre-nosotros",
      component: SobreNosotros
    }
  ]
});

export default router;
