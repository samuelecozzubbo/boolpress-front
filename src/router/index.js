// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'; // Importa la vista Home
import About from '../pages/About.vue'; // Importa la vista About
import Blog from '../pages/Blog.vue'; // Importa la vista Blog
import Contacts from '../pages/Contacts.vue'; // Importa la vista Contacts

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home2',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },{
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active', // Personalizza linkActiveClass
    linkExactActiveClass: 'exact-active' // Personalizza linkExactActiveClass
  });
export default router;
