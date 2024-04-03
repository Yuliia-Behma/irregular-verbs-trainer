import { createRouter, createWebHistory } from "vue-router";

import StartTraining from "@/components/StartTraining.vue";
import VerbList from "@/components/VerbList.vue";

const routes = [
        {
            path: '/',
            component: StartTraining
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