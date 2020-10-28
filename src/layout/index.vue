<template>
  <div id="box">
    <div class="menuBox">
      <side-bar></side-bar>
      <div :class="{'transitionContent':$store.state.app.collapse}" class="content">
        <div class="topBarPosition">
          <top-menu></top-menu>
        </div>
        <div class="contentBto">
          <transition name="fade">
            <router-view/>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/side-bar/index.vue';
import TopMenu from '@/components/top-menu/index.vue';

export default {
  name: "index.vue",
  components: {
    SideBar,
    TopMenu
  }
}
</script>

<style lang="scss" scoped>
/*vue过渡动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

#box {
  height: 100%;

  .menuBox {
    width: 100%;
    /*height: calc(100% - 50px);*/
    height: 100%;
    display: flex;
  }
}

.content {
  width: calc(100% - 210px);
  transition: .8s all;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .contentBto {
    overflow-y: scroll;
    height: calc(100% - 50px);
    margin-top: 50px;
    width: 100%;
  }
}

.topBarPosition {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
.transitionContent{
  width: calc(100% - 64px);
  transition: 0s;
}
</style>
