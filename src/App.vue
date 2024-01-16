<template>
  <t-layout>
    <t-header class="header-component-wrap">
      <div class="logo-wrap" @click="onClickMenuItem('home')">
        <img src="@/assets/images/logo.png" alt="" />
        <span>神农oss</span>
      </div>
      <t-head-menu v-model="current" class="menu" theme="dark" mode="horizontal" @change="onClickMenuItem">
        <t-menu-item value="home"> 主页 </t-menu-item>
        <t-menu-item value="polaris"> 北极星 </t-menu-item>
        <t-menu-item value="rainbow"> 七彩石 </t-menu-item>
      </t-head-menu>
      <div class="login-wrap">
        <t-avatar size="40" :image="`//r.hrc.woa.com/photo/150/${landingPerson}.png`" />
        <span class="user-name">{{ landingPerson }}</span>
      </div>
    </t-header>
    <t-content class="content-container">
      <HelloWorld></HelloWorld>
      <router-view></router-view>
    </t-content>
  </t-layout>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
