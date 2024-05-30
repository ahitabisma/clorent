import FaqPage from '@/views/FaqPage.vue'
import SignInPage from '@/views/SignInPage.vue'
import AppView from '@/views/landingPage/AppView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqPage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInPage
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
