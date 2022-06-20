import {createWebHistory, createRouter} from "vue-router";
import Accueil from "@/components/Accueil.vue"
import Inscription from "@/components/Inscription.vue"
import Connexion from "@/components/Connexion.vue"
import Apropos from "@/components/Apropos.vue"
import Todolist from "@/components/Todolist.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'accueil',
            component: Accueil,
        },
        {
            path: "/inscription",
            name: 'inscription',
            component: Inscription,
        },
        {
            path: "/connexion",
            name: 'connexion',
            component: Connexion,
        },
        {
            path: "/todolist",
            name: 'todolist',
            component: Todolist,
        },
        {
            path: "/apropos",
            name: 'apropos',
            component: Apropos,
        }

    ]
})

export default router