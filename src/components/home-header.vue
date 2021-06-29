<template>
  <ul class="header-ul">
    <li class="header-li">主页</li>
    <li class="header-li">笔记</li>
    <li class="header-li">踩坑</li>
    <li class="header-li">
      <a href="#">Github</a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
.header-ul {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 0 10px 2px #f6f6f6;
  background-color: #fff;

  .header-li {
    padding: 10px 20px;

    a {
      cursor: pointer;
    }
  }
}
</style>