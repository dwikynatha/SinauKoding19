import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import TablePengguna from "@/views"
import Update from "@/views/Update"
import Tambah from "@/views/Tambah"
import View from "@/views/View"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/table-pengguna',
    name: 'TablePengguna',
    component: TablePengguna
  },
  {
    path: '/tambah',
    name: 'Tambah',
    component: Tambah
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
  {
    path: '/view/:id',
    name: 'View',
    component: View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
