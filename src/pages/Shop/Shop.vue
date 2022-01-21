<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="tab">
      <div class="tab-item" @click="vala">
        <router-link to="/shop/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info">详情</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
import {mapState} from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('getShopInfo')
  },
  computed:{
    ...mapState(['info']),
  },
  components:{
    ShopHeader
  },
  methods: {
    vala(){
      console.log(this.info);
    }
  },
}
</script>

<style lang="less" scoped>
  .tab{
    height: 40px;
    line-height: 40px;
    background: #fff;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .tab-item{
      float: left;
      width: 33.3333%;
      text-align: center;
      font-size: 14px;
      color: rgb(77, 85, 93);
      a{
        display: block;
        position: relative;
        &.router-link-active{
          color: #ffd930;
          &::after{
            content: '';
            position: absolute;
            left: 50%;
            bottom: 1px;
            width: 35px;
            height: 2px;
            transform: translateX(-50%);
            background: #ffd930;
          }
        }
      }
    }
  }
</style>