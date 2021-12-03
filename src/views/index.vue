<template>
  <!-- <home-header></home-header> -->
  <div class="index">
    <home-sidebar></home-sidebar>
  </div>
</template>

<script lang="ts">
import HomeHeader from '@/components/home-header.vue';
import HomeSidebar from '@/components/home-sidebar.vue';
export default {
  components: {
    HomeHeader,
    HomeSidebar
  }
}
</script>

<style lang="scss" scoped>
.index {
  margin: 0 auto;
  width: 1200px;
  position: relative;
}
</style>