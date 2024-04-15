import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import VerbList from "@/pages/VerbList.vue";
import Rules from "@/pages/Rules.vue";
import ChooseLevel from "@/components/ChooseLevel.vue"

const routes = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/choose-level',
            component: ChooseLevel
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