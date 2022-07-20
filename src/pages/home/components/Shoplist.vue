<template>
  <div class="recommend">
    <router-link to="/recommend">
      <div class="title">專屬你的推薦</div>
    </router-link>
    <swiper 
    :slidesPerView="2"
    :spaceBetween="100"
    > 
    <swiper-slide>
        <router-link to="/shop">
          <div class="q-pa-md  items-start q-gutter-md ">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
              <q-card-section >
                  <q-btn
                  round
                  color="yellow"
                  icon="place"
                  class="absolute"
                  style="top: 0; right: 0.24rem; transform: translateY(-80%)"
                  />
                <div class="row no-wrap items-center">
                  <div class="col  ellipsis text-dark text-weight-bold">
                    肯德基
                  </div>
                  <div class="col-auto text-grey  items-center">
                    5km
                  </div>
                </div>
                <div class="row rating">
                  <span class="grade">5.0</span>
                  <q-rating  v-model="starts" :max="5" size="0.4rem" color="#FFD400" readonly  />
                </div>
                <div class="text-grey ellipsis /">
                  Small plates, salads & sandwiches in an intimate setting.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <div class="q-pa-md  items-start q-gutter-md ">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            <q-card-section >
              <q-btn
              round
              color="yellow"
              icon="place"
              class="absolute"
              style="top: 0; right: 0.24rem; transform: translateY(-80%);"
              />
              <div class="row no-wrap items-center">
                <div class="col  ellipsis text-bold">
                  肯德基
                </div>
                <div class="col-auto text-grey  items-center">
                  5km
                </div>
              </div>
              <div class="row rating">
                <span class="grade">5.0</span>
                <q-rating v-model="stars" :max="5" size="0.4rem" />
              </div>
              <div class="text-grey ellipsis /">
                Small plates, salads & sandwiches in an intimate setting.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="q-pa-md  items-start q-gutter-md ">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            <q-card-section >
              <q-btn
              round
              color="yellow"
              icon="place"
              class="absolute"
              style="top: 0; right: 0.24rem; transform: translateY(-80%);"
              />
              <div class="row no-wrap items-center">
                <div class="col  ellipsis text-bold">
                  肯德基
                </div>
                <div class="col-auto text-grey  items-center">
                  5km
                </div>
              </div>
              <div class="row rating">
                <span class="grade">5.0</span>
                <q-rating v-model="stars" :max="5" size="0.4rem" />
              </div>
              <div class="text-grey ellipsis /">
                Small plates, salads & sandwiches in an intimate setting.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div class="divider"></div>

  <div class="popular">
        <router-link to="/popular">
          <div class="title">受歡迎</div>
        </router-link>
        <swiper
        :slidesPerView="2"
        :spaceBetween="100"
        >
            <swiper-slide>
                <div class="q-pa-md  items-start q-gutter-md ">
                    <q-card class="my-card">
                        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                        <q-card-section >
                            <q-btn
                            round
                            color="yellow"
                            icon="place"
                            class="absolute"
                            style="top: 0; right: 0.24rem; transform: translateY(-80%);"

                            />
                            <div class="row no-wrap items-center">
                                <div class="col  ellipsis text-bold text">
                                    肯德基
                                </div>
                                <div class="col-auto text-grey  items-center">
                                    5km
                                </div>
                            </div>
                            <div class="row  rating">
                                <span class="grade">5.0</span>
                                <q-rating v-model="stars" :max="5" size="0.4rem" />
                            </div>
                            <div class="text-grey ellipsis /">
                                Small plates, salads & sandwiches in an intimate setting.
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="q-pa-md  items-start q-gutter-md ">
                    <q-card class="my-card">
                        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                        <q-card-section >
                            <q-btn
                            round
                            color="yellow"
                            icon="place"
                            class="absolute"
                            style="top: 0; right: 0.24rem; transform: translateY(-80%);"
                            />
                            <div class="row no-wrap items-center">
                                <div class="col  ellipsis text-bold">
                                    肯德基
                                </div>
                                <div class="col-auto text-grey  items-center">
                                    5km
                                </div>
                            </div>
                            <div class="row  rating">
                                <span class="grade">5.0</span>
                                <q-rating v-model="stars" :max="5" size="0.4rem" />
                            </div>
                            <div class="text-grey ellipsis /">
                                Small plates, salads & sandwiches in an intimate setting.
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="q-pa-md  items-start q-gutter-md ">
                    <q-card class="my-card">
                        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                        <q-card-section >
                            <q-btn
                            round
                            color="yellow"
                            icon="place"
                            class="absolute"
                            style="top: 0; right: 0.24rem; transform: translateY(-80%);"
                            />
                            <div class="row no-wrap items-center">
                                <div class="col  ellipsis text-bold">
                                    肯德基
                                </div>
                                <div class="col-auto text-grey  items-center">
                                    5km
                                </div>
                            </div>
                            <div class="row  rating">
                                <span class="grade">5.0</span>
                                <q-rating v-model="stars" :max="5" size="0.4rem" />
                            </div>
                            <div class="text-grey ellipsis /">
                                Small plates, salads & sandwiches in an intimate setting.
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'


  export default {
      name: 'HomeShop',
      components: {
        Swiper,
        SwiperSlide
      },
      data () {
        return {
          starts: 3
        }
      }
  }
</script>

<style lang="sass" scoped>
  .recommend,.popular
    position: relative
    width: 100%
    height: 5.68rem
    &.popular
      display: inline-block
      margin-bottom: 1.45rem
   
    .title 
        font-size: 0.45rem
        margin: 0.2rem 0 0 0.3rem
        color: #333
    .my-card
        height: 4.52rem 
        width: 4.42rem
        .rating
            align-items: center
            .grade 
                margin-right: 0.05rem
                color: black
  .divider 
    height: 0.14rem
    background-color: #F2F2F2
</style>