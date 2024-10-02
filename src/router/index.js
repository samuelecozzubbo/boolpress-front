// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'; // Importa la vista Home
import About from '../pages/About.vue'; // Importa la vista About
import Blog from '../pages/Blog.vue'; // Importa la vista Blog
import Contacts from '../pages/Contacts.vue'; // Importa la vista Contacts
import PostDetail from '../pages/PostDetail.vue';
import Error404 from '../pages/Error404.vue';
import PostCategory from '../pages/PostCategory.vue';
import PostTag from '../pages/PostTag.vue';

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
  },
  {
    //PASSO IL PARAMETRO DINAMICO
    path: '/dettaglio-post/:slug',
    name: 'postDetail',
    component: PostDetail
  },
  {
    path: '/404',
    name: '404',
    component: Error404
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
  {
    path: '/post-per-categoria/:slug',
    name: 'postCategory',
    component: PostCategory
  },
  {
    path: '/post-per-tag/:slug',
    name: 'postTag',
    component: PostTag
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active', // Personalizza linkActiveClass
    linkExactActiveClass: 'exact-active' // Personalizza linkExactActiveClass
  });
export default router;
