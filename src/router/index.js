import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import SobreNosotros from "../pages/SobreNosotros.vue";
import Productos from "../pages/Productos.vue";
import ProductoDetalle from "../pages/ProductoDetalle.vue";
import Recetas from "../pages/Recetas.vue";
import RecetaDetalle from "../pages/RecetaDetalle.vue";
import Beneficios from "../pages/Beneficios.vue";
import Carrito from "../pages/Carrito.vue";

import AdminLayout from "../admin/layouts/AdminLayout.vue";
import DashboardAdmin from "../admin/pages/DashboardAdmin.vue";
import ProductosAdmin from "../admin/pages/ProductosAdmin.vue";
import ProductoForm from "../admin/pages/ProductoForm.vue";
import RecetasAdmin from "../admin/pages/RecetasAdmin.vue";
import RecetaForm from "../admin/pages/RecetaForm.vue";

import InicioAdmin from "../admin/pages/InicioAdmin.vue";
import NosotrosAdmin from "../admin/pages/NosotrosAdmin.vue";
import BeneficiosAdmin from "../admin/pages/BeneficiosAdmin.vue";

const routes = [
  { path: "/", component: Home },

  { path: "/productos", component: Productos },
  {
    path: "/productos/:slug",
    component: ProductoDetalle
  },

  { path: "/recetas", component: Recetas },
  {
    path: "/recetas/:slug",
    component: RecetaDetalle
  },

  { path: "/beneficios", component: Beneficios },
  { path: "/sobre-nosotros", component: SobreNosotros },
  { path: "/carrito", component: Carrito },

  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "AdminDashboard",
        component: DashboardAdmin
      },

      {
        path: "inicio",
        name: "AdminInicio",
        component: InicioAdmin
      },

      {
        path: "productos",
        name: "AdminProductos",
        component: ProductosAdmin
      },
      {
        path: "productos/nuevo",
        name: "AdminProductoNuevo",
        component: ProductoForm
      },
      {
        path: "productos/:id",
        name: "AdminProductoEditar",
        component: ProductoForm,
        props: true
      },

      {
        path: "recetas",
        name: "AdminRecetas",
        component: RecetasAdmin
      },
      {
        path: "recetas/nueva",
        name: "AdminRecetaNueva",
        component: RecetaForm
      },
      {
        path: "recetas/:id",
        name: "AdminRecetaEditar",
        component: RecetaForm,
        props: true
      },

      {
        path: "nosotros",
        name: "AdminNosotros",
        component: NosotrosAdmin
      },

      {
        path: "beneficios",
        name: "AdminBeneficios",
        component: BeneficiosAdmin
      },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
