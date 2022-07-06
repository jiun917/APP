<template>
  <div class="home">
      <home-header></home-header>
      <home-ad> </home-ad>
      <home-store></home-store>
      <home-dock></home-dock>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeAd from './components/Ad.vue'
import HomeStore from './components/Shop.vue'
import HomeDock from './components/Dock.vue'
export default {
    name:'HomePage',
    components: {
      HomeHeader,
      HomeAd,
      HomeStore,
      HomeDock
    }
}
</script>

<style lang="sass" scoped>
  
</style>