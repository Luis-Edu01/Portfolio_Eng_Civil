import { createRouter, createWebHistory } from "vue-router";

import Perfil from "../views/Perfil.vue";
import Projetos from "../views/Projetos.vue";
import Contato from "../views/Contato.vue";

const routes = [
  {
    path: "/",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/Projetos",
    name: "Projetos",
    component: Projetos,
  },
  {
    path: "/Contato",
    name: "Contato",
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
