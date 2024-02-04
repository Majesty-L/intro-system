<template>
  <a-layout>
    <div class="header-title">
      敬请期待！
    </div>
  </a-layout>
</template>

<script>
export default {
  name: 'firstPage',
  components: {
  },
  mounted() {
    window.scrollTo(0,0);
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.header-title {
  height: 10vh;
  background-color: #ffffff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
