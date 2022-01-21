<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-starmeituan" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-starshouye1" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>
<style lang="less" scoped>
  .cartcontrol{
    font-size: 0;
    display: flex;
    .cart-decrease{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
    }
    .icon-starmeituan{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(241, 136, 79);
      &.move-enter-active,&.move-leave-active{
        transition: all .3s;
      }
      &.move-enter,&.move-leave-to{
        opacity: 0;
        transform: translateX(15px) rotate(180deg);
      }
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147,153,159);
    }
    .icon-starshouye1{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color:rgb(241, 136, 79) ;
    }
  }
</style>
<script>
  export default {
    props: {
      food: Object
    },

    methods: {
      updateFoodCount (isAdd) {
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>