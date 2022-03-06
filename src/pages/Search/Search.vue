<template>
  <div class="body">
    <van-sticky>
      搜索
    </van-sticky>
    <form class="search" @submit.prevent="search">
      <van-field
        class="seaInp"
        placeholder="请输入商家或者商品名称"
        left-icon="search"
        v-model="keyword"
      >
      </van-field>
      <van-button round type="info">搜索</van-button>
    </form>
    
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
    <!-- <FooterGuide /> -->
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {

    data () {
      return {
        keyword: '',
        imgBaseUrl: 'http://cangdu.org:8001/img/',
        noSearchShops: false
      }
    },

    computed: {
      ...mapState(['searchShops'])
    },

    methods: {
      search () {
        // 得到搜索关键字
        const keyword = this.keyword.trim()
        console.log(keyword);
        // 进行搜索
        if(keyword) {
          this.$store.dispatch('getSearchShops', keyword)
        }
      }
    },

    watch: {
      searchShops (value) {
        if(!value.length) { // 没有数据
          this.noSearchShops = true
          console.log('显示无数据');
        } else {// 有数据
          this.noSearchShops = false
        }
      }
    }
  }
</script>
<style lang="less" scoped>
@import "./Search.less";
</style>