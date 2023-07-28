import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
      props: {
        titulo: 'Listado Clientes'
      }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/AgregarClienteView.vue'),
      props: {
        titulo: 'Agregar Cliente'
      }
    }
  ]
})

export default router
