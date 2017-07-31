<template>
  <div id="app">
    <div class="header"></div>
    <div class="sidebar"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  .header {
    width: 100%;
    height: 80px;
    background-color: #3d3d3d;
    -webkit-box-shadow: 0 5px 5px 0px #f2f2f2;
              box-shadow: 0 5px 5px 0px #f2f2f2;
  }

  .sidebar {
    position: fixed;
    top: 80px;
    bottom: 0;
    width: 200px;
    background-color: #ffffff;
    -webkit-box-shadow: 5px 0 5px -2px #f2f2f2;
              box-shadow: 5px 0 5px -2px #f2f2f2;
  }

  router-view {
    margin-left: 200px;
  }
</style>
