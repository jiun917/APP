<template>
  <div class="home">
      <home-header></home-header>
      <home-ad> </home-ad>
      <home-shoplist></home-shoplist>
      <home-dock></home-dock>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeAd from './components/Ad.vue'
import HomeShoplist from './components/Shoplist.vue'
import HomeDock from './components/Dock.vue'
export default {
    name:'HomePage',
    components: {
      HomeHeader,
      HomeAd,
      HomeShoplist,
      HomeDock
    }
}
</script>

<style lang="sass" scoped>
  
</style>