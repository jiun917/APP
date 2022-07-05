<template>
  <div class="home">
      <home-header></home-header>
      <home-ad> </home-ad>
      <home-store></home-store>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeAd from './components/Ad.vue'
import HomeStore from './components/Shop.vue'

export default {
    name:'HomePage',
    components: {
      HomeHeader,
      HomeAd,
      HomeStore
    }
}
</script>

<style lang="sass" scoped>
  
</style>