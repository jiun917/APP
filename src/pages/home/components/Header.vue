<template>
      <div class="title" >
          <div class="logo">
              <img class="logo-img" src="https://picsum.photos/95/75">
          </div>
          <div class="name">
             Hello guys
          </div>
          <div class="icon">
            <span class="material-icons">
                notifications
            </span>
            <div class="circle"></div>
          </div>
          <div class="user">
              <img class="user-img" src="https://picsum.photos/79/76">
          </div>
          <div class="input">
              <q-input class="input-search" bg-color="white" dense rounded outlined  disable label="搜尋餐廳"   >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
              </q-input>
          </div>
      </div>
</template>

<script>
export default {
    name:'HomeHeader',
  
}
</script>

<style lang="sass" scoped>
    .title
        position: relative
        top: 0
        height: 4.12rem
        background-color: #FFD40080

        .logo 
            position: absolute 
            top: 0.22rem
            left: 0.32rem
            width: 1.91rem 
            height: 1.5rem
            
            .logo-img 
                width: 100%
        .name 
            position: absolute
            top: 1.86rem
            left: 0.28rem
            font-size: 0.7rem
        .icon
            position: absolute
            right: 0.26rem
            top:0.4rem
            .material-icons
                font-size: 0.6rem
                color: rgba(0,0,0,0.4)
            .circle 
                position: absolute
                border: solid 0.1rem red
                border-radius: 100%
                right: 0
                top: 0
        .user 
            position: absolute 
            border: solid 0.01rem black
            border-radius: 100%
            top: 1.38rem
            right: 0.52rem
            overflow: hidden
            .user-img 
                width: 100%
        .input 
            position: absolute 
            top: 3.1rem 
            right: 0.14rem
            left: 0.14rem
           
    
</style>