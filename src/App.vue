<template>
  <div id="app">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" to="/">首页</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/standard">规范</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/tools">工具</router-link>
      </li>
    </ul>
    <main class="router-view">
      <router-view />
    </main>
  </div>
</template>
<style lang="css" src="./assets/styles/reset.css"></style>
<style lang="scss" scoped>
#app {
  .router-view {
    padding: 20px;
  }
}
</style>
