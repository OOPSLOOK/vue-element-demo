import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login/login'

import index from '@/components/index'

import home from '@/components/singe/page/home/home'
import test from '@/components/singe/page/test/test'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: "/login"
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/home',
            component: index,
            children: [{
                    path: '/',
                    component: home
                },
                {
                    path: 'test',
                    component: test,
                    children: [{
                            path: "/",
                            component: test
                        },
                        {
                            path: "/test",
                            component: test
                        },
                    ]
                },
            ]
        }
    ]
})