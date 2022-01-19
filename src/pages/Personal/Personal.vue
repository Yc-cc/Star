<template>
  <div class="body">
    <van-sticky> 我的 </van-sticky>
    <section class="profile-number">
      <router-link
        :to="userInfo._id ? '/userinfo': '/login'"
        class="profile-link"
      >
        <div class="profile_image">
          <i class="iconfont icon-starwode"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!userInfo.phone">
            {{ userInfo.name || "登录/注册" }}
          </p>
          <p>
            <span class="user-icon">
              <!-- <i class="iconfont icon-shouji icon-mobile"></i> -->
              <van-icon name="phone-o" />
            </span>
            <span class="icon-mobile-number">{{
              userInfo.phone || "暂无绑定手机号"
            }}</span>
          </p>
        </div>
        <span class="arrow">
          <van-icon name="arrow" />
        </span>
      </router-link>
    </section>
    <section class="profile_info_data">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-starshouye1"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <van-icon name="arrow" />
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-starwanwu"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <van-icon name="arrow" />
          </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-staryouxuan"></i>
        </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
            <van-icon name="arrow" />
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-starshenghuofuwu"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <van-icon name="arrow" />
          </span>
        </div>
      </a>
    </section>

    <section class="profile_my_order border-1px">
      <van-button
        type="warning"
        style="width: 100%"
        v-if="userInfo._id"
        @click="logout"
        >退出登陆</van-button
      >
    </section>
    <!-- <FooterGuide /> -->
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
//引入底部组件
import FooterGuide from "../../components/FooterGuide/FooterGuide.vue";
import {Dialog,Toast} from 'vant'
export default {
  computed:{
    ...mapState(['userInfo']),
    ...mapActions(['resetUserInfo'])
  },
  components: {
    FooterGuide,
  },
  methods: {
    logout(){
      Dialog.confirm({
        message: '是否要退出登录！',
      }).then(() => {
          this.$store.dispatch('resetUserInfo')
          this.$toast.success('退出成功')
        })
        .catch(() => {
          this.$toast.fail('退出失败')
        });
    }
  },
};
</script>

<style lang="less" scoped>
    @import "./Personal.less";
</style>