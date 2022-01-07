<template>
  <div class="body">
    <van-sticky>
      搜索
    </van-sticky>
    <div class="search">
        <van-field
          class="seaInp"
          placeholder="请输入商家或者商品名称"
          left-icon="search"
        >
        </van-field>
        <van-button round type="info">搜索</van-button>
      </div>
    <!-- <FooterGuide /> -->
  </div>
</template>
<script>
//引入底部组件
import FooterGuide from "../../components/FooterGuide/FooterGuide.vue";
//引入头部组件
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  components: {
    FooterGuide,
    HeaderTop,
  },
};
</script>
<style lang="less" scoped>
@import "./Search.less";
</style>