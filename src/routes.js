import Home from './views/Home.vue';
import Challenge1 from './views/Challenge1.vue';
import Challenge2 from './views/Challenge2.vue';
import Challenge3 from './views/Challenge3.vue';
import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
    { path: '/', component: Home },
    {
        path: '/Challenge1',
        component: Challenge1,
    },
    {
        path: '/Challenge2',
        component: Challenge2,
    },
    {
        path: '/Challenge3',
        component: Challenge3,
    },
    { path: '/:path(.*)', component: NotFound },
];
