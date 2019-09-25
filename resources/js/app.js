require('./bootstrap');

window.Vue = require('vue');
window.$ = require('jquery')
window.JQuery = require('jquery')

import Routes from './Routes.js';
import App from './views/App';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

try {
    console.log(require.resolve('../../appaccess.json'));
    var access = require("../../appaccess.json");
} catch(e) {
}

window.ACCESS_TOKEN = typeof(access) !== "undefined" ? access.access_token : null;
window.REFRESH_TOKEN = typeof(access) !== "undefined" ? access.refresh_token : null;

Vue.component('short', require('./components/Short.vue').default);

const app = new Vue({
    el: '#app',
    router: Routes,
    data: {
    globalvar: 'global hello world'
  	},
    render: h => h(App)
});

export default app;