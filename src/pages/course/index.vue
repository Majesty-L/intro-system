<template>
  <div class="course-container">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'commonIndex',
}
</script>
<style lang="less" scoped>
.course-container {
  width: 100%;
  background: var(--grey-100, #FEFEFE);
}
</style>