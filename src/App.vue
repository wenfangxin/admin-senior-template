<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #nprogress .bar {
    background: #7b98b5 !important; //路由进度条自定义颜色
  }
  #app{
    width: 100%;
    height: 100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
   /*改变菜单展开颜色*/
  .el-submenu .el-menu-item{
    background-color: #1f2d3d!important;
  }
</style>
