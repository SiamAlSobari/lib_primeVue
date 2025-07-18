import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import RootPage from './pages/rootPage.vue'
import LoginPage from './pages/auth/loginPage.vue'
import MainLayout from './layouts/main-layout.vue'


const routes = [
  { 
    path: '/', 
    component: MainLayout,
    children: [
      {path:'/',component:RootPage}
    ]
  },
  {path:'/auth/login',component:LoginPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router