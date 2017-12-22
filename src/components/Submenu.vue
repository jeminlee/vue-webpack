<template>
    <div class="small-2 columns" id="submenu">
        <ul class="vertical menu">
            <li>
                <span class="submenuHeader">{{ $t('submenu.headers.domain') }}</span>
                <ul class="nested vertical menu">
                    <li><router-link to="/" class="submenuLinks">{{ $t('submenu.domain.overview') }}</router-link></li>
                    <li><router-link to="/ipfilter" class="submenuLinks">{{ $t('submenu.domain.ipFilter') }}</router-link></li>
                </ul>
            </li>

        </ul>
        <div class="copyright">
            <span>&copy; Jemin Lee</span><br/>
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
