import App from './App.vue'
import Overview from './components/Overview.vue'
import IpFilter from './components/IpFilter.vue'
import Settings from './components/Settings.vue'

const User = {
    template: `
        <div class="user">
            <h2>Domain {{ $route.params.domain }}</h2>
            <router-view></router-view>
        </div>
  `
}

export var routes = [{
        path: '/',
        component: Overview,
    },
    {
        path: '/ipfilter',
        component: IpFilter
    },
    {
        path: '/:domain',
        component: User,
        children: [{
            path: 'settings',
            component: Settings
        }]
    }
]
