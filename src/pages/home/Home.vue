<template>
  <div class="home">
      <home-header></home-header>
      <home-ad> </home-ad>
 shopInformation_header
      <home-shoplist></home-shoplist>

      <home-store></home-store>
master
      <home-dock></home-dock>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeAd from './components/Ad.vue'
 shopInformation_header
import HomeShoplist from './components/Shoplist.vue'

import HomeStore from './components/Shop.vue'
master
import HomeDock from './components/Dock.vue'
export default {
    name:'HomePage',
    components: {
      HomeHeader,
      HomeAd,
 shopInformation_header
      HomeShoplist,

      HomeStore,
 master
      HomeDock
    }
}
</script>

<style lang="sass" scoped>
  
</style>