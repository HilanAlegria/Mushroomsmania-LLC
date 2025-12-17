import { createRouter, createWebHistory } from "vue-router";

/* ===== PÚBLICO ===== */
import Home from "../pages/Home.vue";
import Productos from "../pages/Productos.vue";
import ProductoDetalle from "../pages/ProductoDetalle.vue";
import Recetas from "../pages/Recetas.vue";
import RecetaDetalle from "../pages/RecetaDetalle.vue";
import Beneficios from "../pages/Beneficios.vue";
import SobreNosotros from "../pages/SobreNosotros.vue";
import Contacto from "../pages/Contacto.vue";
import Carrito from "../pages/Carrito.vue";

/* ===== ADMIN ===== */
import AdminLayout from "../admin/layouts/AdminLayout.vue";
import DashboardAdmin from "../admin/pages/DashboardAdmin.vue";
import ProductosAdmin from "../admin/pages/ProductosAdmin.vue";
import ProductoForm from "../admin/pages/ProductoForm.vue";

const routes = [
  /* ===== RUTAS PÚBLICAS ===== */
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
  { path: "/contacto", component: Contacto },

  /* ===== RUTAS ADMIN ===== */
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
      }
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
