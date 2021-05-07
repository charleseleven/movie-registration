import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddMovie from '../views/AddMovie.vue'
import EditMovie from '../views/EditMovie.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddMovie',
    component: AddMovie
  },
  {
    path: '/movies/:id',
    name: 'EditMovie',
    component: EditMovie,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
