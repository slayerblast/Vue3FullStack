import {createWebHistory, createRouter} from "vue-router";
import Accueil from "@/components/Accueil.vue"
import Inscription from "@/components/Inscription.vue"
import Connexion from "@/components/Connexion.vue"


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
        }

    ]
})

export default router