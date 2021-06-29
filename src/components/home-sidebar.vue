<template>
  <div class="sidebar">
   <div class="sidebar-info">
      <div class="info-avatar"></div>
      <span class="info-nick">12334567</span>
   </div>
   <div class="sidebar-tags">
   </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 280px;
  min-height: 300px;
  background-color: #ccc;
  position: absolute;
  top: 10px;
  right: 0;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px 10px;

  .sidebar-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    .info-avatar {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
  }
}
</style> 