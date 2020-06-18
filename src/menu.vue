<template>
    <el-menu default-active="1" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>子项目1</span>
        </template>
        <el-menu-item index="/bbb"><div @click="goto('vue-bbb', '/bbb')">主页</div></el-menu-item>
        <el-menu-item index="/bbb/baidu"><div @click="goto('vue-bbb', '/bbb/baidu')">百度</div></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span>子项目2</span>
        </template>
        <el-menu-item index="/aaa"><div @click="goto('vueDemo', '/aaa')">主页</div></el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">子项目3</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">子项目4</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
/* eslint-disable */
export default {
    methods: {
        goto(title, href) {
            window.history.pushState({}, title, href);
        }
    }
    
}
</script>
<style scoped>

</style>