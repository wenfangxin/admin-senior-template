<template>
    <el-menu
        :collapse-transition="true"
        :collapse="$store.state.app.collapse"
        :default-active="$route.path"
        class="el-menu-vertical-demo sideBar"
        background-color="#304156"
        text-color="#bfcbd9"
        :router="true"
        active-text-color="#409eff">
      <template v-for="route in $store.state.user.menuRoute">
        <el-menu-item :index="route.redirect" v-if="!route.nesting">
          <i class="iconfont" :class="route.children[0].meta.icon"></i>
          <span slot="title">{{ route.children[0].meta.title }}</span>
        </el-menu-item>
        <el-submenu :index="route.path" v-if="route.nesting">
          <template slot="title">
            <i class="iconfont" :class="route.meta.icon"></i>
            <span slot="title">{{ route.meta.title }}</span>
          </template>
          <el-menu-item  v-for="item in route.children" :index="route.path+'/'+item.path" :key="item.path">{{ item.meta.title }}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
    }
  },
  methods: {
    clickItem(v){
      console.log(v)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
  width:210px;
  height: 100%;
  overflow-y: scroll;
  font-weight: 400 !important;
}

.sideBar {
  font-weight: 400!important;
  .iconfont{
    margin-right: 15px;
  }
}

.sideBar::-webkit-scrollbar { /*滚动条整体样式*/
  width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.sideBar::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
  background: white;
}

.sideBar::-webkit-scrollbar-track { /*滚动条里面轨道*/
  /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
  background: white;
}
</style>
