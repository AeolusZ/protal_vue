<template>
  <div id="protalApp">
    <template v-if="!isChildApp">
        <router-view/>
    </template>
    <template v-show="isChildApp">
        <Main :loading="loading" :content="content"></Main>
    </template>
  </div>
</template>

<script>
import Main from '@/views/Main'
export default {
  // name: 'root-view',
  components: {
     Main,   
  },
  props: {
      loading: Boolean,
      content: String 
  },
  data(){
    return {
    }
  },
  computed: {
      isChildApp() {
        if(this.$route.path.match('/bbb') || this.$route.path.match('/aaa')){
          return true;
        }else{
          return false;
        }
      }
  },
  methods: {
  }
}
</script>

<style>
html,body { height: 100%; padding: 0; margin: 0; }
#protalApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
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
.flex-horizonal-center {
  justify-content: center;
}
.flex-vertical-center {
  align-items: center;
}

</style>
