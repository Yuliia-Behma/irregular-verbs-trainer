import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import VerbList from "@/pages/VerbList.vue";
import Rules from "@/pages/Rules.vue";

const routes = [
        {
            path: '/',
            component: Home
    },
        {
            path: '/rules',
            component: Rules
        },
         {
            path: '/verbs-list',
            component: VerbList
        }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router