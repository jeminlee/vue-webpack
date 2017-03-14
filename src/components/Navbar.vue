<template>
<div>
    <div class="top-bar" data-responsive-toggle="navbar-menu" data-hide-for="medium">
        <button class="menu-icon" type="button" data-toggle="navbar-menu"></button>
        <div class="title-bar-title"></div>
    </div>

    <div class="top-bar" id="navbar-menu">
        <div id="logo">
            220x50
            <!-- <a href="#"><img src="../assets/logo.png"/></a> -->
        </div>
        <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu="dropdown-menu" role="menubar" data-options="disableHover:true; clickOpen:true">
                <li class="is-dropdown-submenu-parent domainList" role="menuitem" aria-haspopup="true" aria-label="user" data-is-click="false">
                    <a href="#0">heise.de</a>
                    <ul class="submenu menu" role="menu">
                        <div class="row">
                            <div class="small-12 columns">
                                <input type="search" id="domainSearchBar" placeholder="Search...">
                            </div>
                        </div>
                        <li id="domain-header">Domain</li>
                        <div class="row collapse">
                            <div class="small-11 columns">
                                <li role="menuitem" v-for="user in users">
                                    <a href="#0">{{ user.name }}</a>
                                </li>
                            </div>
                            <div class="small-1 columns">
                                Arr
                            </div>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="dropdown menu" data-dropdown-menu="dropdown-menu" role="menubar">
                <li role="menuitem">
                    <a href="#0">
                        <i class="fi-clipboard-pencil large"></i>
                    </a>
                </li>
                <li role="menuitem" aria-haspopup="true" aria-label="user">
                    <a href="#0">jemin.lee</a>
                    <ul class="submenu menu first-sub" role="menu">
                        <li role="menuitem">
                            <a href="#0">Overview</a>
                        </li>
                        <li role="menuitem">
                            <a href="#0">Documents</a>
                        </li>
                    </ul>
                </li>
                <li role="menuitem" aria-haspopup="true" aria-label="user">
                    <a href="#0">EN</a>
                    <ul class="submenu menu first-sub" role="menu">
                        <li role="menuitem">
                            <a href="#0">{{ $t('lang.en') }}</a>
                        </li>
                        <li role="menuitem">
                            <a href="#0">{{ $t('lang.de') }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                users: []
            }
        },
        created(){
            axios.get('https://jsonplaceholder.typicode.com/users')
              .then(response => this.users = response.data)
              .catch(function (error) {
                console.log(error);
              });
        }
    }
</script>

<style lang="scss">
    #logo {
        width: 220px;
        max-height: 50px;
        background-color: #00314c;
        float: left;
    }

    .top-bar {
        background-color: #002b49;
        color: #FFF;
        font-size: 14px;
        max-height: 50px;

        .domainList {
            font-size: 18px;
            #domain-header { background-color: #F3F3F3; }
            #domainSearchBar { margin: 12px 0px; }
            > ul {
                background-color: #FFF;
                width: 400px;
                > li, a {
                    color: #000;
                    padding: 5px 20px;
                }
            }
        }

        ul {
            background-color: inherit;
            a { color: #FFF; }
            > li > ul > li > a { background-color: #FFF; color: #000 }
        }
    }
</style>
