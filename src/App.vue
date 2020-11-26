<template>
  <div id="app">
    <router-view></router-view>
    <TarBar>
        <TarBarItem path='/home' activeColor='red'>
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/shouye.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/shouyeActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div>首页</div>
          </template>   
        </TarBarItem>
        <TarBarItem path="/cart" activeColor='red'>
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/gouwuche.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/gouwucheActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div>购物车</div>
          </template> 
        </TarBarItem>
        <TarBarItem path="category" activeColor="red">
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/fenlei.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/fenleiActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div >分类</div>
          </template> 
        </TarBarItem>
        <TarBarItem path="profile" activeColor="red">
          <template v-slot:item-icon>
            <img src="./assets/tabbarImg/img/wode.svg" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="./assets/tabbarImg/img/wodeActive.svg" alt="">
          </template>
          <template v-slot:item-text>
            <div>我的</div>
          </template> 
        </TarBarItem>
      </TarBar>
  </div>
</template>

<script>
import TarBar from './components/tabbar/tabbar'
import TarBarItem from './components/tabbar/tabbarItem'

export default {
  name: 'App',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style>
@import url('./assets/css/base.css');
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
img{
  width: 24px;
  height: 24px;
  margin-top: 6px;
}
div{
  height: 24px;
  line-height: 24px;
}
</style>
