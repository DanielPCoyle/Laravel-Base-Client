require('./bootstrap');

window.Vue = require('vue');

import Routes from './routes.js';
import App from './views/App';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)


Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App)
});

export default app;