import { createRouter, createWebHistory } from "vue-router";
/* Importar las paginas/vistas que seran rutas */
import Home from '../pages/home.vue';
import Skills from '../pages/skills.vue'
import Projects from '../pages/projects.vue'
import Contact from '../pages/contact.vue'

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/skills",
        component: Skills
    },
    {
        path: "/projects",
        component: Projects
    },
    {
        path: "/contact",
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;