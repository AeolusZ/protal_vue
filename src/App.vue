<template>
  <div id="root" class="main-container flex">
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
import Menu from './menu.vue'
export default {
  name: 'root-view',
  components: {
     Menu,   
  },
  props: {
      loading: Boolean,
      content: String 
  },
}
</script>

<style>
html,body { height: 100%; padding: 0; margin: 0; }
#root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100vh;
}
.flex {
  display: flex;
  height: 100%;
}
.flex-column {
  flex-direction: column;
}
.flex-1 {
  flex:1
}
.app-menu {
  width: 300px;
  height: 100%;
}
.el-menu {
  height: 100%;
}

</style>
