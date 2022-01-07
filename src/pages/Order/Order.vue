<template>
    <div class="body">
        <van-sticky>
            订单列表
        </van-sticky>
        <div class="main">
            <img src="./images/person.png" alt="">
            <h3>登录后查看订单信息</h3>
            <van-button>立即登录</van-button>
        </div>
        <!-- <FooterGuide/> -->
    </div>
</template>
<script>
    //引入底部组件
    import FooterGuide from "../../components/FooterGuide/FooterGuide.vue"
    
    export default {
        components:{
            FooterGuide,
        }
    }
</script>
<style lang="less" scoped>
    @import "./Order.less";
</style>