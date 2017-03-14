import Vue from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import Router from 'vue-router';

import 'script-loader!jquery'
import 'script-loader!foundation-sites'

import { routes } from './router-config.js';

Vue.use(VueI18n);
Vue.use(Router);

var locales = {
    en: require('json-loader!./translation/messages.en.json'),
    de: require('json-loader!./translation/messages.de.json')
}

Vue.config.lang = 'de'

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

$(document).ready(function($) {
  $(document).foundation();
});

const router = new Router({
   routes,
   mode: 'history',
});

const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
