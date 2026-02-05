import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
import Wall from '../pages/wall.vue'
import DashboardLayout from '../layouts/dashboard.vue'
import CollectSlug from '../pages/collect/[slug].vue'

// Temporary placeholder for dashboard index
import DashboardIndex from '../pages/dashboard/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/wall',
            name: 'wall',
            component: Wall
        },
        {
            path: '/collect/:slug',
            name: 'collect',
            component: CollectSlug
        },
        {
            path: '/dashboard',
            component: DashboardLayout,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: DashboardIndex
                },
                {
                    path: 'embed',
                    name: 'embed',
                    component: () => import('../pages/dashboard/embed.vue')
                },
                {
                    path: 'analytics',
                    name: 'analytics',
                    component: () => import('../pages/dashboard/analytics.vue')
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: () => import('../pages/dashboard/settings.vue')
                }
            ]
        },
        {
            path: '/campaign',
            component: DashboardLayout,
            children: [
                {
                    path: '',
                    name: 'campaigns',
                    component: () => import('../pages/campaign/index.vue')
                },
                {
                    path: 'new',
                    name: 'new-campaign',
                    component: () => import('../pages/campaign/new.vue')
                },
                {
                    path: ':slug/:id',
                    name: 'campaign-testimonial-detail',
                    component: () => import('../pages/campaign/[slug]/[id].vue')
                }
            ]
        },
        {
            path: '/displayboard',
            component: DashboardLayout,
            children: [
                {
                    path: '',
                    name: 'displayboard',
                    component: () => import('../pages/displayboard.vue')
                }
            ]
        }
    ]
})

export default router
