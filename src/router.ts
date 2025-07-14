import { createMemoryHistory, createRouter } from 'vue-router'
import RootPage from './pages/rootPage.vue'


const routes = [
  { path: '/', component: RootPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router