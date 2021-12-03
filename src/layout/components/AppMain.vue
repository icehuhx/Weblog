<template>
  <div class="app-main">
    <router-view :key="key"></router-view>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const key = computed(() => route.path)
    console.log(key)

    return {
      key
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  // position: relative;
  // overflow: hidden;
}
</style>