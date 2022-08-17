import {createRouter, createWebHistory} from 'vue-router'
import Index from "../views/Index.vue";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: '/page-1',
            name: 'page-1',
            component: () => import('../views/Page-1.vue')
        },
        {
            path: '/page-2',
            name: 'page-2',
            component: () => import('../views/Page-2.vue')
        },
        {
            path: '/page-3',
            name: 'page-3',
            component: () => import('../views/Page-3.vue')
        },
        {
            path: '/page-4',
            name: 'page-4',
            component: () => import('../views/Page-4.vue')
        },
        {
            path: '/page-5',
            name: 'page-5',
            component: () => import('../views/Page-5.vue')
        },
        {
            path: '/page-6',
            name: 'page-6',
            component: () => import('../views/Page-6.vue')
        },
        {
            path: '/page-7',
            name: 'page-7',
            component: () => import('../views/Page-7.vue')
        },
        {
            path: '/page-8',
            name: 'page-8',
            component: () => import('../views/Page-8.vue')
        },
        {
            path: '/page-9',
            name: 'page-9',
            component: () => import('../views/Page-9.vue')
        },
        {
            path: '/page-10',
            name: 'page-10',
            component: () => import('../views/Page-10.vue')
        },
        {
            path: '/page-11',
            name: 'page-11',
            component: () => import('../views/Page-11.vue')
        },
        {
            path: '/page-12',
            name: 'page-12',
            component: () => import('../views/Page-12.vue')
        },
        {
            path: '/page-13',
            name: 'page-13',
            component: () => import('../views/Page-13.vue')
        },
        {
            path: '/page-14',
            name: 'page-14',
            component: () => import('../views/Page-14.vue')
        },
        {
            path: '/page-15',
            name: 'page-15',
            component: () => import('../views/Page-15.vue')
        },
        {
            path: '/page-16',
            name: 'page-16',
            component: () => import('../views/Page-16.vue')
        },
        {
            path: '/page-17',
            name: 'page-17',
            component: () => import('../views/Page-17.vue')
        },
        {
            path: '/page-18',
            name: 'page-18',
            component: () => import('../views/Page-18.vue')
        },
        {
            path: '/page-19',
            name: 'page-19',
            component: () => import('../views/Page-19.vue')
        },
        {
            path: '/page-20',
            name: 'page-20',
            component: () => import('../views/Page-20.vue')
        },
        {
            path: '/page-21',
            name: 'page-21',
            component: () => import('../views/Page-21.vue')
        },
        {
            path: '/page-22',
            name: 'page-22',
            component: () => import('../views/Page-22.vue')
        },
        {
            path: '/page-23',
            name: 'page-23',
            component: () => import('../views/Page-23.vue')
        },
        {
            path: '/page-24',
            name: 'page-24',
            component: () => import('../views/Page-24.vue')
        },
        {
            path: '/page-25',
            name: 'page-25',
            component: () => import('../views/Page-25.vue')
        },
        {
            path: '/page-26',
            name: 'page-26',
            component: () => import('../views/Page-26.vue')
        },
        {
            path: '/page-27',
            name: 'page-27',
            component: () => import('../views/Page-27.vue')
        },
        {
            path: '/page-28',
            name: 'page-28',
            component: () => import('../views/Page-28.vue')
        },
        {
            path: '/page-29',
            name: 'page-29',
            component: () => import('../views/Page-29.vue')
        },
        {
            path: '/page-30',
            name: 'page-30',
            component: () => import('../views/Page-30.vue')
        },
        {
            path: '/page-31',
            name: 'page-31',
            component: () => import('../views/Page-31.vue')
        },
        {
            path: '/page-32',
            name: 'page-32',
            component: () => import('../views/Page-32.vue')
        },
        {
            path: '/page-33',
            name: 'page-33',
            component: () => import('../views/Page-33.vue')
        },
        {
            path: '/page-34',
            name: 'page-34',
            component: () => import('../views/Page-34.vue')
        },
        {
            path: '/page-35',
            name: 'page-35',
            component: () => import('../views/Page-35.vue')
        },
    ]
})

export default router
