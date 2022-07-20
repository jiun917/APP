<template>
    <div class="shopcart">
        <div class="header">
            <div class="header_left">
                <router-link to="/shop">
                    <div class="circle back">
                        <span class="material-icons back_arrow">
                            navigate_before
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="header_right">
                <div class="shopcartword">
                    購物車
                </div>
                <div class="shopname">
                    肯心基
                </div>
            </div>
        </div>
        <div class="goodsInfo">
            <div class="goodsInfo_title">
                餐點細項
            </div> 
            <div class="divider"></div>
            <q-scroll-area
            class="rounded-borders scroll"
            style="height: 4.36rem; width: 100%;"
            >
            <div class="goodslist" v-for="(item,index) in order" :key="index">
                <div class="goods_quantity">
                    <q-fab  v-model="test" :label=item.quantity  padding="xs" direction="right">
                        <q-fab-action  padding="xs" color="yellow" @click="cutClick(index)" icon=" remove_circle_outline" />
                        <q-fab-action  padding="xs" color="yellow" @click="addClick(index)" icon="add_circle_outline" />
                    </q-fab>
                </div>
                <div class="goods_name">{{item.name}}</div>
                <div class="price">${{item.quantity*item.price}}</div>
            </div>
            </q-scroll-area>
            
            
        </div>
        
    </div>
    <!-- <div v-for="(item,index) in order" :key="index">
        {{item[0].name}}{{item[0].value}}
    </div> -->
</template>

<script>
export default {
    name: 'ShopcartPage',
    data() {
        return {
            test: false,
            
        }
    },
    computed: {
        order() {
            return this.$store.getters.order
        },
        
        
    },
    methods: {
        cutClick(target){
            this.test = true
            if(this.$store.getters.order[target].quantity>0)
            {
                this.$store.dispatch('getcutquantity',target)
            }
                
        },
        addClick(target){
            this.test = true
            this.$store.dispatch('getaddquantity',target)
        }
    },
    
    
}
</script>

<style lang="sass" scoped>
.shopcart
    height: 0
    padding-bottom: 216%
    background-color: #F5F5F5
    .header
        position: relative
        display: flex 
        flex-direction: row
        align-items: center
        height: 1.72rem
        background-color: #FFD40080
        .header_left
            padding: 0.6rem 0 0.54rem 0.3rem
            margin-right: 0.4rem
            .circle
                border: solid 0.01rem white
                border-radius: 100%
                background-color: #fff
                overflow: hidden
            .back
                position: relative
                width: 0.6rem
                height: 0.6rem
                align-content: center
                .back_arrow
                    position: absolute
                    top: 50%
                    left: 50%
                    transform: translate(-50%,-50%)
                    font-size: 0.5rem
                    padding: 0
                    color: #000
        .header_right
            font-size: 0.35rem
            font-weight: bold
            .shopcartword
                margin-bottom: 0.2rem
        
    .goodsInfo
        background-color: white
        margin: 0.84rem 0.3rem
        padding: 0.34rem
        width: 6.9rem
        height: 5.46rem
        .divider 
            margin: 0.3rem 0 0 0
            height: 0.05rem
            background-color: #FFBD09
        .goodslist
            display: flex 
            flex-direction: row
            margin:0.4rem
            align-items: center
            color: #FFBD09
            font-weight: bold
            .goods_name
                flex-grow: 1
            .goods_quantity 
                flex-grow: 1
            
           
            
            

        
</style>