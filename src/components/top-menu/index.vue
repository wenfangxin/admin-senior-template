<template>
  <div class="topBox">
    <div class="topLeft">
      <i @click="changeSidebar" class="iconfont" :class="$store.state.app.menuIcon"></i>
      <div style="margin-left: 30px">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in matched" :key="index">{{
              item.meta.title
            }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="topRight">
      <div>
        <i @click="handleFullScreen" class="iconfont icon-zhankai"></i>
      </div>
      <div style="margin-left: 20px">
        <el-dropdown>
          <div style="display: flex;align-items: flex-end;" class="el-dropdown-link">
            <div class="userPhoto">
              <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                   alt="">
            </div>
            <i style="font-size: 12px;margin-left:5px;font-weight: bold;margin-bottom: 4px;"
               class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="loginOut()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import {resetRouter} from '@/router'

export default {
  name: "index",
  data() {
    return {
      matched:null,
      fullscreen: false  // 是否全屏
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    /**
     * 根据路由获取面包屑
     */
    getBreadcrumb() {
      this.matched = this.$route.matched.filter(
          (item) => item.meta && item.meta.title && item.path != "/home"
      );
    },

    /**
     * 折叠菜单
     */
    changeSidebar() {
      if (this.$store.state.app.collapse) {
        this.$store.commit('SET_COLLAPSE', false);
        this.$store.commit('SET_MENU_ICON', 'icon-zhedie1');
      } else {
        this.$store.commit('SET_COLLAPSE', true);
        this.$store.commit('SET_MENU_ICON', 'icon-zhedie2');
      }
    },
    /**
     * 全屏事件
     */
    handleFullScreen() {
      let element = document.documentElement;
      // 判断是否已经是全屏
      // 如果是全屏，退出
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {    // 否则，进入全屏
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      // 改变当前全屏状态
      this.fullscreen = !this.fullscreen;
    },
    /**
     * 退出登录
     * @returns {Promise<void>}
     */
    async loginOut() {
      await this.$store.dispatch('user/loginOut');
      resetRouter(); //重置路由
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.topBox {
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  display: flex;
  background: white;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;

  .topLeft {
    display: flex;
    align-items: center;
  }

  .topRight {
    display: flex;
    align-items: center;
  }

  i {
    display: block;
    font-size: 22px;
    cursor: pointer;
    color: #5a5e66;
  }
}

.openIcon {
  transform: rotate(45deg);
  font-size: 24px !important;
}

.userPhoto {
  img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
