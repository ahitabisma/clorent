import Premium from '@/views/Premium.vue'
import Lite from '@/views/Lite.vue'
import FaqPage from '@/views/FaqPage.vue'
import SignInPage from '@/views/SignInPage.vue'
import AppView from '@/views/landingPage/AppView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DetailProduct from '@/views/DetailProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppView,
      meta: {
        title: 'Sewa Baju Pesta - Clo Rent'
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqPage,
      meta: {
        title: 'FAQ - Clo Rent'
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInPage,
      meta: {
        title: 'Sign In - Clo Rent'
      }
    },
    {
      path: '/browse/lite',
      name: 'lite',
      component: Lite,
      meta: {
        title: 'Browse Lite'
      }
    },
    {
      path: '/browse/premium',
      name: 'premium',
      component: Premium,
      meta: {
        title: 'Browse Premium'
      }
    },
    {
      path: '/browse/:id',
      name: 'browse-detail',
      component: DetailProduct,
      meta: {
        title: 'Product - Clo Rent'
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
