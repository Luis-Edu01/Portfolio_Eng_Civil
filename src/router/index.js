import { createRouter, createWebHistory } from "vue-router";
                            /* Views */
import Perfil from "../views/Perfil.vue";
import Projetos from "../views/Projetos.vue";
import Contato from "../views/Contato.vue";

                            /* Projetos Nacionais */
import projeto_n1 from "../projetos/nacionais/projeto_n1.vue";

                            /* Projetos Interacionais */
import projeto_i1 from "../projetos/internacionais/projeto_i1.vue";

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
  {
    path: "/projetos/nacionais/projeto_n1",
    name: "projeto_n1",
    component: projeto_n1,
  },
    {
    path: "/projetos/internacionais/projeto_i1",
    name: "projeto_i1",
    component: projeto_i1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
