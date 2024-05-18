import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import VerbList from "@/pages/VerbList.vue";
import ChooseLevel from "@/components/ChooseLevel.vue"
import GameRules from "@/pages/GameRules.vue";
import Result from "@/components/Result.vue";
import ResultDetails from "@/components/ResultDetails.vue";

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
            component: GameRules
        },
        {
            path: '/verbs-list',
            component: VerbList
        },
        {
            path: '/results',
            component: Result
    },
        {
            path: '/result-details',
            component: ResultDetails
        }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router