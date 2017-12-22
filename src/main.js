import Vue from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';

import { routes } from './router-config.js';

Vue.use(VueI18n);
Vue.use(VueRouter);

var locales = {
    en: require('json-loader!./translation/messages.en.json'),
    de: require('json-loader!./translation/messages.de.json')
}

const i18n = new VueI18n({});

i18n.locale = 'en'

Object.keys(locales).forEach(function(lang) {
    i18n.setLocaleMessage(lang, locales[lang])
})

const router = new VueRouter({
    routes,
    mode: 'history',
});

const app = new Vue({
    i18n,
    router,
    render: h => h(App),
}).$mount('#app');
