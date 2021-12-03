<template>
  <nav-bar />
  <app-main />
  <side-bar />
</template>
<script lang="ts">
import NavBar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import SideBar from '../layout/components/SideBar.vue'
export default {
  components: {
    NavBar,
    AppMain,
    SideBar
  },
  setup() {
    
  },
}
</script>