<template>
    <div class="main-container flex">
      <div class="app-menu">
        <Menu></Menu>
      </div>
      <div class="app-page flex-1">
        <!-- 子应用盒子 -->
        <div id="root-view" class="app-view-box" v-html="content"></div>
      </div>
    </div>
</template>

<script>
import Menu from '@/menu.vue'
export default {
  name: 'root-view',
  components: {
     Menu,   
  },
  props: {
      loading: Boolean,
      content: String 
  },
  data(){
    return {
    }
  },
}
</script>

<style>
.app-menu {
  width: 300px;
  height: 100%;
}
.el-menu {
  height: 100%;
}

</style>
