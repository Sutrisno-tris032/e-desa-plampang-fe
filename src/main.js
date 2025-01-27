import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// import Bostrap
// import BootstrapVue3 from 'bootstrap-vue-3';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);

app.use(router).mount('#app');
