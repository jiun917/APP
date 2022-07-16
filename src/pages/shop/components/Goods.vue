<template>
<transition name="fold">
    <div class="goods" v-show="isselectgoods">
        <div class="goods_header">
            <div class="goods_img_div">
                <img class="goods_img" src="https://picsum.photos/365/243">
            </div>
            <div class="close">
                <span class="material-icons"  @click="isgoback()">
                    close
                </span>
            </div>
        </div>
        <div class="goods_detail">
            <div class="goods_detail_header">
                <div class="goods_">{{goodsItem.name}}</div>
                <div class="goods_price">${{goodsItem.price}}</div>
            </div>
            <div class="divider"></div>
            <div class="goods_select_list">
                <q-form @submit="onSubmit" class="q-gutter-md form">
                    <div v-for="(item, index) in options" :key="index">
                        <div class="listname">{{item[0].name}}</div>
                        <q-option-group 
                        :options="options[index]"
                        type="radio"
                        v-model="select[index]"
                        keep-color
                        >
                        </q-option-group>
                    </div>
                    <div class="shopcart">
                        <div class="decrease" :class="{noclick:goodscount<=1}" @click="cutgoodsconut">
                            <span class="material-icons">
                                remove_circle_outline
                            </span>
                        </div>
                        <div class="goodscount"  >
                            {{goodscount}}
                        </div>
                        <div class="increase"  @click="addgoodsconut">
                            <span class="material-icons">
                                add_circle_outline
                            </span>
                        </div>
                        <q-btn class="shopcart_btn" label="加到購物車" type="submit" color="yellow" />
                    </div>
                </q-form>
            </div>
        </div>
        <q-dialog v-model="alert">
            <q-card style="width: 5rem;height: 2.5rem">
                <q-card-section>
                    <div v-for="(item,index) in select" :key="index">
                        <div v-if="item==''">
                            第{{index+1}}項-未選擇
                        </div>
                    </div>
                    
                </q-card-section>
                 <q-card-actions align="center"> 
                    <q-btn label="OK" color="yellow" v-close-popup></q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</transition>
</template>


<script>


export default {
    name: 'ShopGoods',
    data() {
        return{
            goback: false,
            submitEmpty: false,
            alert: false,
            selected: [],
            select: [],
            goodscount: 1,
        }
    },
    props: {
        goodsItem: Object,
        options: Array,
        isselectgoods: Boolean
    },
    
    methods: { 
        isgoback() {
            this.select=[]
            this.goodscount=1
            this.$emit("addshopcart",this.selected.length) 
        },
        onSubmit(evt) {
            const formData = new FormData(evt.target)
            const submitResult = []
            this.alert = false
            this.submitEmpty = false
            submitResult.push(this.goodsItem.name,this.goodscount)
            for(const [name,value] of formData.entries()) {
                submitResult.push({
                    name,
                    value
                })
            }
           
            for(var i=0;i<this.options.length;i++)
            {
                if(!this.select[i])
                {
                    this.alert = true
                    this.submitEmpty = true
                    this.select[i]=''
                    
                }
            }
            console.log(submitResult)
            if(!this.alert && !this.submitEmpty)
            {
                this.selected.push(submitResult)
                this.alert = false
                this.submitEmpty = false
                this.select = []
                this.goodscount = 1
                this.$emit("addshopcart",this.selected.length) 
                console.log(this.selected)
            }
        },
        addgoodsconut() {
            this.goodscount++
        },
        cutgoodsconut() {
            if(this.goodscount>1)
                this.goodscount--
        }
    }
        
}
</script>

<style lang="sass" scoped>
    .fold-enter-active,.fold-leave-active
        transition: 0.5s
    .fold-enter, .fold-leave-to
        transform: translateY(100%)
    .goods
        position: absolute
        top: 0
        left: 0
        background-color: #fff
        z-index: 101
        width: 100%
        height:18rem
        .goods_header
            margin: 0.1rem
            .goods_img_div
                height: 4.86rem
                border-radius: 1rem
                overflow: hidden
                .goods_img
                    width: 100%
                    height: 100%
                    border-radius: 1rem
                    object-fit: cover
            .close
                position: fixed
                top:0
                left:0
                margin: 0.5rem
                border-radius: 100%
                width:0.78rem
                height: 0.78rem
                background-color: #fff
                .material-icons
                    position: absolute
                    top: 50%
                    left: 50%
                    transform: translate(-50%,-50%)
                    font-size: 0.5rem
                    color: #000
        .goods_detail          
            .goods_detail_header
                padding: 0.5rem 0.5rem
                display: flex
                flex-direction: row
                justify-content: space-between
                font-size: 0.5rem
                font-weight: bold
                color: #FFBD09
            .divider 
                height: 0.05rem
                background-color: #A9A9A9
            .goods_select_list
                margin: 0.5rem
                .form
                    .shopcart
                        position: relative
                        display: flex 
                        flex-direction: row
                        align-content: center
                        .increase,.decrease
                            font-size: 0.6rem
                            color: #FFBD09
                            margin-right: 0.3rem
                            &.noclick
                                color: #C0C0C0
                        .goodscount
                            margin-right: 0.3rem
                            font-size: 0.4rem
                            align-self: center
                        .shopcart_btn
                            align-self: center
                            position: absolute
                            right: 0
                            font-weight: bold
                .listname
                    font-size: 0.4rem
         

    

    
            
</style>