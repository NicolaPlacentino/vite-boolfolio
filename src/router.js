import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ShowPage from './pages/ShowPage.vue';
//todo importare show page

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:id', name: 'show', component: ShowPage },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

export { router }