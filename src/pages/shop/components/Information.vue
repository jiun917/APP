<template>
    <div class="shopinfo">
        <div class="header">
            <div class="header_1">
                <div class="circle back">
                    <span class="material-icons back_arrow">
                        navigate_before
                    </span>
                </div>
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
                    <div class="circle icon"></div>
                </div>
            </div>
        </div>
        <div class="goods_list">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInformation'
}
</script>

<style lang="sass" scoped>

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
                .back
                    width: 0.6rem
                    height: 0.6rem
                    align-content: center
                    .back_arrow
                        font-size: 0.5rem
                        padding: 0
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
                    border: solid 0.01rem white
                    border-radius: 100%
                    background-color: #fff
                    width: 1.5rem
                    height: 1.5rem
                    margin: 0 0.2rem
            
            
                
        
</style>