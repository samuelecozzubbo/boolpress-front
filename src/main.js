// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa il router
import './assets/main.scss';

const app = createApp(App);

app.use(router); // Usa Vue Router

app.mount('#app');

