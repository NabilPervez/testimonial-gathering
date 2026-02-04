import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
import Wall from '../pages/wall.vue'
import DashboardLayout from '../layouts/dashboard.vue'
import DashboardNewCampaign from '../pages/dashboard/campaigns/new.vue'
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
                    path: 'campaigns/new',
                    name: 'new-campaign',
                    component: DashboardNewCampaign
                }
            ]
        }
    ]
})

export default router
