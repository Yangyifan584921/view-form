import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../layout/index.vue')
const HelloWorld = () => import('../components/HelloWorld.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/hello',
                name: 'hello',
                component: HelloWorld
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router