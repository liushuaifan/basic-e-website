import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue'
import Cartview from '../views/CartView.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/LogIn.vue'
const routes = [
  {path: '/', name:'Home',component: Homeview},
  {path: '/cart', name:'Cart',component: Cartview },
  {path: '/signUp', name:'signUp',component: SignUp },
  {path: '/LogIn', name:'LogIn',component: Login },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
