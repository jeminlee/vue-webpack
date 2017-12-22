<template>
    <div>
        <div class="top-bar" data-responsive-toggle="navbar-menu" data-hide-for="medium">
            <button class="menu-icon" type="button" data-toggle="navbar-menu"></button>
            <div class="title-bar-title"></div>
        </div>

        <div class="top-bar" id="navbar-menu">
            <div id="logo"></div>
            <div class="top-bar-left"></div>
            <div class="top-bar-right"></div>
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
