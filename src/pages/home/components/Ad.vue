<template>
<div class="ad">
    <div class="q-pa-md">
      <q-carousel
      swipeable
      height="3.5rem"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
</div>
<div class="divider">
</div>
</template>

<script>
export default {
    name:'HomeAd',
    data () {
        return {
            slide: 1,
            autoplay: true
        }
    }
}
</script>

<style lang="sass" scoped>
    .ad 
        position: relative
        height: 0 
        padding-bottom: 53.94%
    .divider 
        height: 0.14rem
        background-color: #F2F2F2
</style>