import { createRouter, createWebHistory } from 'vue-router'
import RootPage from './pages/rootPage.vue'
import LoginPage from './pages/auth/loginPage.vue'
import MainLayout from './layouts/main-layout.vue'
import RegisterPage from './pages/auth/registerPage.vue'
import AuthLayout from './layouts/auth-layout.vue'


const routes = [
  { 
    path: '/', 
    component: MainLayout,
    children: [
      {path:'/',component:RootPage}
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {path:'login',component:LoginPage},
      {path:'register',component:RegisterPage}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router