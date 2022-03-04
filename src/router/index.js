import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      // 首頁
      {
        path: 'home',
        component: () => import('../views/HomeView.vue')
      },
      // 登入
      {
        path: 'login',
        component: () => import('../views/LoginView.vue')
      },
      // 產品頁面
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      // 單一產品頁
      {
        // Node.js
        path: 'product/:id',
        component: () => import('../views/ProductView.vue')
      },
      // 購物車頁面
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/AdminCoupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
