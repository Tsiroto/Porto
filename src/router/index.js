import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Timeline from '../views/Timeline.vue';
import People from '../views/People.vue';
import Contact from '../views/Contact.vue';
import Starbucks from '../views/Starbucks.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/starbucks',
    name: 'Starbucks',
    component: Starbucks,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
