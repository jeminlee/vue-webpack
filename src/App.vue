<template>
  <div id="app">
      <Navbar></Navbar>
      <div class="row expanded" id="mainContainer">
          <Submenu></Submenu>
          <div class="small-10 columns end">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Submenu from './components/Submenu.vue'

export default {
  name: 'app',
  components: { Navbar, Submenu }
}
</script>

<style lang="scss">
    #mainContainer {
        background-color: #F3F3F3;
    }

    i.small { font-size: 0.8rem; }
    i.medium { font-size: 1rem; }
    i.large { font-size: 1.3rem; }
</style>
