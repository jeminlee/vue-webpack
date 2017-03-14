import App from './App.vue'
import Overview from './components/Overview.vue'
import CacheClear from './components/CacheClear.vue'
import CdnBrowser from './components/CdnBrowser.vue'
import ErrorPages from './components/ErrorPages.vue'
import DNS from './components/Dns.vue'
import IpFilters from './components/IpFilters.vue'
import Settings from './components/Settings.vue'

const User = {
  template: `
    <div class="user">
      <h2>Domain {{ $route.params.domain }}</h2>
      <router-view></router-view>
    </div>
  `
}

export var routes = [
    {
        path: '/',
        component: Overview,
    },
    {
        path: '/cache',
        component: CacheClear
    },
    {
        path: '/cdn',
        component: CdnBrowser
    },
    {
        path: '/errorpages',
        component: ErrorPages
    },
    {
        path: '/dns',
        component: DNS
    },
    {
        path: '/ipfilters',
        component: IpFilters
    },
    {
        path: '/:domain',
        component: User,
        children: [
            {
                path: 'settings',
                component: Settings
            }
        ]
    }
    // { path: '*', redirect: '/en' }
]
