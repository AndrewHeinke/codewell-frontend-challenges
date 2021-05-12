import { createApp } from 'vue';
import './assets/main.scss';
import App from './App.vue';
import { routes } from './routes.js';
import { createRouter, createWebHistory } from 'vue-router';

let base = process.env.NODE_ENV === 'production' ? '/codewell-frontend-challenges/' : '/';

let app = createApp(App);
let router = createRouter({
    scrollBehavior() {
        document.documentElement.scrollTop = 0;
    },
    history: createWebHistory(base),
    routes: import.meta.hot ? [] : routes,
});

if (import.meta.hot) {
    let removeRoutes = [];

    for (let route of routes) {
        removeRoutes.push(router.addRoute(route));
    }

    import.meta.hot.accept('./routes.js', ({ routes }) => {
        for (let removeRoute of removeRoutes) removeRoute();
        removeRoutes = [];
        for (let route of routes) {
            removeRoutes.push(router.addRoute(route));
        }
        router.replace('');
    });
}

app.use(router);

app.mount('#app');
