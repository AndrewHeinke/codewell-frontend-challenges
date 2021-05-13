import Home from './views/Home.vue';
import Challenge1 from './views/Challenge1.vue';
import Challenge2 from './views/Challenge2.vue';
import Challenge3 from './views/Challenge3.vue';
import Challenge4 from './views/Challenge4.vue';
import Challenge5 from './views/Challenge5.vue';
import Challenge6 from './views/Challenge6.vue';
import Challenge7 from './views/Challenge7.vue';
import Challenge8 from './views/Challenge8.vue';
import Challenge9 from './views/Challenge9.vue';
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
    {
        path: '/Challenge4',
        component: Challenge4,
    },
    {
        path: '/Challenge5',
        component: Challenge5,
    },
    {
        path: '/Challenge6',
        component: Challenge6,
    },
    {
        path: '/Challenge7',
        component: Challenge7,
    },
    {
        path: '/Challenge8',
        component: Challenge8,
    },
    {
        path: '/Challenge9',
        component: Challenge9,
    },
    { path: '/:path(.*)', component: NotFound },
];
