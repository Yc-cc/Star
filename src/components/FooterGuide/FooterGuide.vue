<template>
  <div class="footer_guide">
    <div
      class="guide_item"
      @click="goto('/home')"
      :class="{ on: isCurrent('/home') }"
    >
      <span class="item_icon iconfont icon-starmeituan"></span>
      <span class="text">外卖</span>
    </div>
    <div
      class="guide_item"
      @click="goto('/search')"
      :class="{ on: isCurrent('/search') }"
    >
      <span class="item_icon iconfont icon-starsousuo"></span>
      <span class="text">搜索</span>
    </div>
    <div
      class="guide_item"
      @click="goto('/order')"
      :class="{ on: isCurrent('/order') }"
    >
      <span class="item_icon iconfont icon-starshouye1"></span>
      <span class="text">订单</span>
    </div>
    <div
      class="guide_item"
      @click="goto('/personal')"
      :class="{ on: isCurrent('/personal') }"
    >
      <span class="item_icon iconfont icon-starwode"></span>
      <span class="text">我的</span>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        goto(path){
            this.$router.replace(path)
        },
        isCurrent(path){
            return this.$route.path === path
        }
    },
};
</script>

<style lang="less">
    .footer_guide{
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: space-around;
        margin: 0 10px;
        font-size: 13px;
        .guide_item{
            width: 100px;
            height: 50px;
            text-align: center;
            span{
              font-size: 12px;
            }
            .item_icon{
              display: block;
              font-size: 20px;
            }
        }
        .on{
            color: rgba(233, 233, 33, 0.911);
            .text{
              color: black;
            }
        }
        
    }
</style>