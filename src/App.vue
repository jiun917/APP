<template>
  <router-view/>
      <div class="contents">
         <router-link to="/">
            <div class="content">
               <span class="material-icons">home</span>
               <p class="content-text">首頁</p>
            </div>
         </router-link>
         <router-link to="/map">
            <div class="content">
               <span class="material-icons">place</span>
               <p class="content-text">地圖</p>
            </div>
         </router-link>
         <router-link to="/order">
            <div class="content">
               <span class="material-icons">local_grocery_store</span>
               <p class="content-text">訂單</p>
            </div>
         </router-link>
         <router-link to="/friend">
            <div class="content">
               <span class="material-icons">group</span>
               <p class="content-text">好友</p>
            </div>
         </router-link>
         <router-link to="/member">
            <div class="content">
               <span class="material-icons">person_4</span>
               <p class="content-text">會員</p>
            </div>
         </router-link>
      </div>
</template>

<style lang="sass" scoped>
    .contents
        border-top: 0.01rem #E7E3E3 solid
        position: fixed
        bottom: 0
        height:1.38rem
        width: 100%
        z-index: 101
        background-color: white
        & > a 
          &.router-link-active 
            .material-icons 
                color: #FFD400
        .content 
            float: left 
            width: 20%
            display: flex 
            flex-direction: column
            .material-icons 
                font-size: 0.6rem
                padding: 0.1rem
                margin: auto
                color: black
            .content-text 
                line-height: 0.2rem
                height: 0.2rem
                font-weight: bold
                margin: auto
                color: black
</style>
