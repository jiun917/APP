<template>
    <div class="shopinfo">
        <div class="header">
            <div class="header_1">
                <router-link to="/">
                    <div class="circle back">
                        <span class="material-icons back_arrow">
                            navigate_before
                        </span>
                    </div>
                </router-link>
            </div>
            <div class="shop">
                <div class="shop_name">
                    <div class="name">KFC</div>
                    <div class="detail">
                        <div class="time">20-30 min</div>
                        <div class="distance">5km Restaurant</div>
                    </div>
                </div>
                <div class="shopicon">
                    <div class="circle icon">
                        <img class="shop_img" src="https://picsum.photos/75/75">
                    </div>
                </div>
            </div>
        </div>
        <div class="goods_list">
            <div class="goods_title">
                <div class="slogan">"吮指美味樂無窮"</div>
                <div class="collection">
                        <span 
                        class="material-icons heart" 
                        :class="{like: islike}"
                        @click="this.click_like()"
                        >
                            favorite
                        </span>
                        <span>收藏</span>
                </div>
                <div class="rating">
                        <span class="material-icons icon-start">
                            star
                        </span>
                        <span>5.0</span>
                </div>
            </div>
            <div class="goods_select">
                <div 
                class="recommend circle"
                :class="{select: select_r}"
                @click="this.select('r')"
                >
                    推薦
                </div>
                <div 
                class="popular circle"
                :class="{select: select_p}"
                @click="this.select('p')"
                >
                    受歡迎
                </div>
            </div>
            <q-scroll-area
            class="rounded-borders scroll"
            style="height: 55vh; width: 100%;"
            >
                <div 
                v-for="(item,index) in goods"
                :key="index"
                class="goods_list"  
                @click="this.selectIndex(index)">
                    <div class="goods_circle">
                        <img class="goods_img" src="https://picsum.photos/106/123">
                    </div>
                    <div class="goods_info">
                        <div class="goods_name">{{item.name}}</div>
                        <div class="goods_introduce">{{item.introduce}}</div>
                    </div>
                    <div class="goods_rating">
                            <div class="rating">
                                <span class="material-icons icon-start">
                                    star
                                </span>
                                <span>{{item.rating}}</span>
                            </div>
                            <div class="good_price">${{item.price}}</div>
                    </div>
                </div>
            </q-scroll-area>
        </div>

        <div class="shopCart">
            <div class="shopcartnum" v-show="shopcartnum>0">
                <span class="number">{{shopcartnum}}</span>
            </div> 
            <div class="word">前往購物車</div>
        </div>

        <shop-goods 
        :goodsItem="selectgoods" 
        :options="option" 
        :isselectgoods="isselectgoods" 
        @addshopcart="addshopcart">
        </shop-goods>
    </div>
    
</template>

<script>

import ShopGoods from './components/Goods.vue'
export default {
    name:'ShopPage',
      data()  {
        return {
            islike: false,
            select_r: true,
            select_p: false,
            select_c: false,
            isselectgoods:false,
            selectgoods: [],
            option:[],
            shopcartnum:'',
            goods:[
                {name:'原味蛋塔',introduce:'蛋塔外酥內嫩',price:'39',rating:4,isselect:true,
                    options:[
                        [
                            { name:"選擇1",label: '選項11', value: '11',color: 'yellow' },
                            { name:"選擇1",label: '選項12', value: '12',color: 'yellow' },
                            { name:"選擇1",label: '選項13', value: '13',color: 'yellow' }
                        ], 
                        [
                            { name:"選擇2",label: '選項21', value: '21', color: 'yellow' },
                            { name:"選擇2",label: '選項22', value: '22', color: 'yellow' },
                            { name:"選擇2",label: '選項23', value: '23', color: 'yellow' }
                        ]
                    ]},
                {name:'紐澳良烤全雞',introduce:'香嫩多汁，雞巴毛',price:'250',rating:5,isselect:true,
                    options:[
                        [
                            { name:"選擇1",label: '選項11', value: '11',color: 'yellow' },
                            { name:"選擇1",label: '選項12', value: '12',color: 'yellow' },
                            { name:"選擇1",label: '選項13', value: '13',color: 'yellow' }
                        ], 
                        [
                            { name:"選擇2",label: '選項21', value: '21', color: 'yellow' },
                            { name:"選擇2",label: '選項22', value: '22', color: 'yellow' },
                            { name:"選擇2",label: '選項23', value: '23', color: 'yellow' }
                        ],
                    ]},
                {name:'義式香草紙包雞',introduce:'香噴噴，從義大利空運來台',price:'900',rating:3,isselect:true,
                    options:[
                        [
                            { name:"選擇1",label: '選項11', value: '11',color: 'yellow' },
                            { name:"選擇1",label: '選項12', value: '12',color: 'yellow' },
                            { name:"選擇1",label: '選項13', value: '13',color: 'yellow' }
                        ], 
                        [
                            { name:"選擇2",label: '選項21', value: '21', color: 'yellow' },
                            { name:"選擇2",label: '選項22', value: '22', color: 'yellow' },
                            { name:"選擇2",label: '選項23', value: '23', color: 'yellow' }
                        ],
                    ]},
                {name:'烤滷豬',introduce:'小火慢烤，低溫熟成',price:'3000',rating:4,isselect:true,
                    options:[
                        [
                            { name:"選擇1",label: '選項11', value: '11',color: 'yellow' },
                            { name:"選擇1",label: '選項12', value: '12',color: 'yellow' },
                            { name:"選擇1",label: '選項13', value: '13',color: 'yellow' }
                        ], 
                        [
                            { name:"選擇2",label: '選項21', value: '21', color: 'yellow' },
                            { name:"選擇2",label: '選項22', value: '22', color: 'yellow' },
                            { name:"選擇2",label: '選項23', value: '23', color: 'yellow' }
                        ],
                    ]},
                {name:'薯條',introduce:'馬鈴薯做的',price:'45',rating:5,isselect:true,
                    options:[
                        [
                            { name:"選擇1",label: '選項11', value: '11',color: 'yellow' },
                            { name:"選擇1",label: '選項12', value: '12',color: 'yellow' },
                            { name:"選擇1",label: '選項13', value: '13',color: 'yellow' }
                        ], 
                        [
                            { name:"選擇2",label: '選項21', value: '21', color: 'yellow' },
                            { name:"選擇2",label: '選項22', value: '22', color: 'yellow' },
                            { name:"選擇2",label: '選項23', value: '23', color: 'yellow' }
                        ],
                    ]}
            ]
        }
    },
    components: {
        ShopGoods
    },
    methods: {
        click_like() {
            this.islike = !this.islike
        },
        select(s) {
            this.select_r = false
            this.select_p = false
            this.select_c = false
            if(s=='r')
                this.select_r = true
            else if(s=='p')
                this.select_p = true 
            else
                this.select_c = true
        },
        selectIndex(index) {
            this.isselectgoods = true
            this.selectgoods = this.goods[index]
            this.option = this.goods[index].options
            
        },
        addshopcart(shopcart) {
            this.isselectgoods = false
            this.shopcartnum = shopcart
        }
    }
}
</script>

<style lang="sass" scoped>
    .shopinfo
        background-color: #F5F5F5
        .shopCart
            position: relative
            margin: 0.68rem 0.68rem 0 0.68rem
            border-radius: 0.3rem 
            background-color: #FFBD09
            height: 0.66rem
            display: flex
            flex-direction: row
            justify-content: center
            align-items: center
            .shopcartnum
                position: absolute
                left: 0.1rem
                background-color: white
                width: 0.5rem 
                height: 0.5rem
                border-radius: 100%
                text-align: center
                color: #FFBD09
                font-size: 0.4rem
                .number
                    position: absolute
                    top: 50%
                    left: 50%
                    transform: translate(-50%,-50%)
            .word
                color: #fff
                font-weight: bold
        .header
            position: relative
            height: 0 
            padding-bottom: 47%
            background-color: #FFD40080
            .header_1
                padding: 0.6rem 0 0.54rem 0.3rem
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
            .shop 
                display: flex
                flex-direction: row
                .shop_name
                    display: flex
                    flex-grow: 1
                    flex-direction: column
                    margin: 0 0.5rem
                    justify-content: space-between
                    
                    .name
                        font-size: 0.5rem
                    .detail 
                        display: flex
                        flex-direction: row
                        justify-content: space-between
                        align-items: center
                        font-size: 0.3rem
                        font-weight: bold
                        .time
                            padding: 0.1rem
                            border-radius: 0.2rem
                            background-color: #D3D3D380

                .icon
                    border-radius: 100%
                    background-color: #fff
                    overflow: hidden
                    width: 1.5rem
                    height: 1.5rem
                    margin: 0 0.2rem
                    .shop_img
                        border-radius: 100%
                        
    .goods_list 
        .goods_title
            display: flex
            flex-direction: row
            margin: 0.36rem 0.52rem 0 0.6rem
            align-items: center
            font-weight: bold
            .slogan 
                flex-grow: 1
                font-size: 0.3rem
            .collection 
                margin-right: 0.2rem
            .material-icons 
                font-size: 0.45rem
                margin-right: 0.1rem
            .icon-start
                color: #FFBD09
            .like 
                color: #FFBD09
        .goods_select
            font-size: 0.3rem
            display: flex
            flex-direction: row
            justify-content: space-around
            margin: 0.36rem 0.52rem 0 0.6rem
            .circle
                padding: 0.2rem
                border-radius: 0.3rem
                background-color: #FFFFFF
            .select
                background-color: #FFBD09
        .scroll
            margin-top: 0.2rem
        .goods_list 
            margin: 0.3rem
            background-color: #fff
            border-radius: 0.3rem
            display: flex
            flex-direction: row
            justify-content: flex-start
            padding: 0.3rem
            .goods_circle
                flex-shrink: 0
                border-radius: 100%
                overflow: hidden 
                margin: 0 0.18rem
                width: 2.12rem
                height: 2.46rem
                .goods_img
                    border-radius: 100%
            .goods_info 
                display: flex
                flex-direction: column
                margin: 0 0.3rem
                .goods_name
                    font-size: 0.5rem
                    margin-bottom: 0.3rem
                .goods_introduce
                    flex-wrap: wrap
                    color: grey
            .goods_rating
                position: absolute
                right: 0
                padding-right: 0.5rem
                display: flex
                flex-direction: column
                align-self: flex-end
                justify-content: flex-end
                .rating
                    display: flex
                    flex-direction: row
                    justify-content: flex-end
                    align-items: center
                    .icon-start
                        font-size: 0.45rem
                        margin-right: 0.1rem
                        color: #FFBD09
                .good_price
                    font-size: 0.4rem
                    color: #FFBD09
                    font-weight: bold
 
</style>