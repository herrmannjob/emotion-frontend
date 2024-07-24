import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import store from '../store'
import SignIn from '../views/sessions/SignIn.vue'
import SignUp from '../views/sessions/SignUp.vue'

const routes = [
    {
        path: '/formulario',
        name: 'Formulario',
        component: () => import('../views/sessions/Form.vue'),
        meta: {
            title: 'Formulário',
        },
    },
    {
        path: '/registro',
        name: 'Registrar',
        component: () => import('../views/sessions/SignUp.vue'),
        meta: {
            title: 'Registrar',
        },
    },
    {
        path: '/entrar',
        name: 'Entrar',
        component: () => import('../views/sessions/SignIn.vue'),
        meta: {
            title: 'Entrar',
        },
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/index.vue'),
        redirect: '/formulario',
        meta: {
            title: 'Home',
        },

        children: [
            {
                path: '/dashboard',
                name: 'Dashboards',
                component: () => import('../views/dashboards/Dashboards.vue'),
                meta: {
                    title: 'Dashboard',
                },
            },
            {
                path: '/components',
                name: 'components',
                component: () => import('../views/components/index.vue'),
                meta: {
                    title: 'Components',
                },
                children: [
                    {
                        path: 'button',
                        name: 'button',
                        component: () =>
                            import('../views/components/Button.vue'),
                    },
                ],
            },
            {
                path: '/analytics',
                name: 'analytics',
                component: () => import('../views/analytics/Analytics.vue'),
                meta: {
                    title: 'Analytics',
                },
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../views/profile/ProfileTwo.vue'),
                meta: {
                    title: 'Profile',
                },
                children: [
                    {
                        path: 'profileTwo',
                        name: 'ProfileTwo',
                        component: () =>
                            import('../views/profile/ProfileTwo.vue'),
                    },
                ],
            },
        ],
    },

    { path: '/signIn', component: SignIn },
    { path: '/signUp', component: SignUp },

    { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
})

router.afterEach(() => {
    if (window.innerWidth <= 1200) {
        const sidenav =
            store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

        store.commit('largeSidebar/toggleSidebarProperties')
    }
})

export default router
