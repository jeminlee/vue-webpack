<template>
<div class="small-2 columns" id="submenu">
    <ul class="vertical menu">
        <li>
            <span class="submenuHeader">{{ $t('submenu.headers.domain') }}</span>
            <ul class="nested vertical menu">
                <li><router-link to="/" class="submenuLinks">{{ $t('submenu.domain.overview') }}</router-link></li>
                <li><router-link to="/cache" class="submenuLinks">{{ $t('submenu.domain.cacheClear') }}</router-link></li>
                <li><router-link to="/cdn" class="submenuLinks">{{ $t('submenu.domain.cdnBrowser') }}</router-link></li>
                <li><router-link to="/errorpages" class="submenuLinks">{{ $t('submenu.domain.errorPages') }}</router-link></li>
                <li><router-link to="/dns" class="submenuLinks">{{ $t('submenu.domain.dns') }}</router-link></li>
                <li><router-link to="/ipfilters" class="submenuLinks">{{ $t('submenu.domain.ipFilter') }}</router-link></li>
                <li><a href="#">{{ $t('submenu.domain.loadbalancing') }}</a></li>
                <li><a href="#">{{ $t('submenu.domain.maintenance') }}</a></li>
                <li><a href="#">{{ $t('submenu.domain.tags') }}</a></li>
                <li><a href="#">{{ $t('submenu.domain.permissions') }}</a></li>
                <li><a href="#">{{ $t('submenu.domain.redirects') }}</a></li>
                <li><router-link to="/heise.de/settings" class="submenuLinks">{{ $t('submenu.domain.settings') }}</router-link></li>
                <li><a href="#">{{ $t('submenu.domain.statistics') }}</a></li>
                <li><a href="#">{{ $t('submenu.domain.sslManagement') }}</a></li>
                <li><a href="#">{{ $t('submenu.domain.waf') }}</a></li>
            </ul>
        </li>
        <li>
            <span class="submenuHeader">{{ $t('submenu.headers.bgp') }}</span>
            <ul class="nested vertical menu">
                <li><a href="#">{{ $t('submenu.bgp.networkManagement') }}</a></li>
                <li><a href="#">{{ $t('submenu.bgp.statistics') }}</a></li>
            </ul>
        </li>
        <li>
            <span class="submenuHeader">{{ $t('submenu.headers.admintools') }}</span>
            <ul class="nested vertical menu">
                <li><a href="#">{{ $t('submenu.admintools.addAccount') }}</a></li>
                <li><a href="#">{{ $t('submenu.admintools.userManagement') }}</a></li>
            </ul>
        </li>
        <li>
            <span class="submenuHeader">{{ $t('submenu.headers.support') }}</span>
            <ul class="nested vertical menu">
                <li><a href="#">{{ $t('submenu.support.notificationCenter') }}</a></li>
                <li><a href="#">{{ $t('submenu.support.nameServers') }}</a></li>
                <li><a href="#">{{ $t('submenu.support.contact') }}</a></li>
            </ul>
        </li>
        <li>
            <span class="submenuHeader">{{ $t('submenu.headers.general') }}</span>
            <ul class="nested vertical menu">
                <li><a href="#">{{ $t('submenu.general.imprint') }}</a></li>
                <li><a href="#">{{ $t('submenu.general.privacyNotice') }}</a></li>
                <li><a href="#">{{ $t('submenu.general.conditions') }}</a></li>
                <li><a href="#">{{ $t('submenu.general.blog') }}</a></li>
            </ul>
        </li>
    </ul>
    <div class="copyright">
        <span>&copy;Jemin Lee</span><br/>
        <span></span>
    </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    #submenu {
        width: 220px;
        background-color: #FFF;

        .submenuHeader {
            color: #333333;
            font-size: 11px;
        }

        .submenuLinks {
            color: #606060;
            font-size: 13px;
            padding: 4px 0;
        }
    }

    .copyright {
        margin-top: 40px;
        text-align: center;
        font-size: 12px;
    }
</style>
