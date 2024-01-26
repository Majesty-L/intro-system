<template>
  <div class="divider">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="4" viewBox="0 0 820 4" fill="none">
      <path d="M820 1.66602H0" stroke="url(#paint0_linear_458_8067)" stroke-width="3"/>
      <defs>
        <linearGradient id="paint0_linear_458_8067" x1="0" y1="1.66602" x2="100%" y2="1.66602" gradientUnits="userSpaceOnUse">
          <stop stop-color="#D78004" stop-opacity="0"/>
          <stop offset="0.495" stop-color="#D78004"/>
          <stop offset="1" stop-color="#D78004" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'commonDivider',
}
</script>

<style lang="less" scoped>
.divider {
  stroke-width: 3px;
  stroke: rgba(215, 128, 4, 0.00);
  // max-width: 80%;
  // margin: 3rem 0;
}
</style>