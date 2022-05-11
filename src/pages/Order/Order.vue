<template>
  <div class="body">
    <van-sticky>
      订单列表
    </van-sticky>
    <div class="main"
         v-if="!userInfo._id">
      <img src="./images/person.png"
           alt="">
      <h3>登录后查看订单信息</h3>
      <router-link :to="'/login'">
        <van-button>立即登录</van-button>
      </router-link>
    </div>
    <div v-else>
      <ul v-if="OrderList.length>0">
        <li v-for="item in OrderList" :key="item.id">
          <van-swipe-cell>
            <template #left>
              <van-button square
                          type="primary"
                          @click="btnEvt(item, 'detail')"
                          text="详情" />
            </template>
            <section class="list"
                     ref="list">
              <ul class="list_container">
                <section class="list_li">
                  <section class="item_left">
                    <img :src="item.imgSrc"
                         class="restaurant_img">
                  </section>
                  <section class="item_right">
                    <div class="item_right_text">
                      <p>
                        <span>商品名称：{{item.shopName}}</span>
                      </p>
                      <p>时间：{{item.time}}</p>
                      <p>金额：{{item.TotalPrice}}元</p>
                    </div>
                  </section>
                </section>
              </ul>
            </section>
            <template #right>
              <van-button @click="btnEvt(item, 'delete')"
                          square
                          type="danger"
                          text="删除" />
              <van-button @click="btnEvt(item,  'edit')"
                          square
                          type="primary"
                          text="编辑" />
              <van-button @click="btnEvt(item,  'making')"
                          v-if="item.status === '制作中'"
                          square
                          color="orange"
                          text="制作中" />
              <van-button @click="btnEvt(item,  'waiting')"
                          v-if="item.status === '待取餐'"
                          square
                          color="orange"
                          text="待取餐" />
              <van-button @click="btnEvt(item,  'transport')"
                          v-if="item.status === '派送中'"
                          square
                          color="orange"
                          text="派送中" />
              <van-button 
                          v-if="item.status === '已完成'"
                          square
                          color="orange"
                          text="已完成" />
            </template>
          </van-swipe-cell>
        </li>
      </ul>
      <div v-else class="noOrder"><a href="/home">暂无订单，请进行下单！</a></div>
    </div>
    <!-- <FooterGuide/> -->
  </div>
</template>
<script>
import FooterGuide from "../../components/FooterGuide/FooterGuide.vue"
import { mapState } from "vuex"

export default {
  components: {
    FooterGuide,
  },
  data () {
    return {
      state: '制作中',
      OrderList:[
        // {
        //   status:'制作中',
        //   shopName:'嘉禾一品',
        //   imgSrc: 'https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg',
        //   TotalPrice:15,
        //   time:'2022/4/21--15:33',
        // },
        // {
        //   status:'派送中',
        //   shopName:'茶百道',
        //   imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwp.qiyu88.com%2F2021%2F2%2Fze22mm.png&refer=http%3A%2F%2Fwp.qiyu88.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654158186&t=c48fe8cea8251cba7eb890dcb34e43ec',
        //   TotalPrice:22,
        //   time:'2022/4/20--11:27',
        // },
        // {
        //   status:'已完成',
        //   shopName:'蜜雪冰城',
        //   imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-b05ce4ba56ada3d51b282c68d7fd92ad_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654158249&t=54c69dbbcd74408f82e7cfd4b87a7cf3',
        //   TotalPrice:18,
        //   time:'2022/4/19--14:45',
        // }
      ]
    }
  },
  created() {
    this.orderMade()
  },
  computed: {
    ...mapState(['userInfo','orderMessage']),
  },
  methods: {
    orderMade(){
      console.log(this.orderMessage);
      var goodsName = ''
      if(this.orderMessage.orderObj){
        this.orderMessage.orderObj.forEach(e=>{
          // console.log(e);
          if(this.orderMessage.orderObj.length === 1){
            goodsName = e.name
          }else{
            goodsName = e.name+','
            if(goodsName.length !== 0){
              goodsName = goodsName.substring(0,goodsName.length-1)
            }
          }
        })
        var orderItem = {
          status:'制作中',
          shopName:goodsName,
          imgSrc:this.orderMessage.orderObj[0].image,
          TotalPrice:this.orderMessage.messageObj.totalPrice,
          time:this.orderMessage.messageObj.time
        }
        console.log(orderItem);
        this.OrderList.push(orderItem)
      }
      
    },
    //对订单进行操作，更换订单的状态
    btnEvt (row, type) {
      switch (type) {
        case 'edit':
          // this.$router.push({ path: '/purchase/edit', query: { id: row.id } })
          break
        case 'detail':
          // this.$router.push({ path: '/purchase/detail', query: { id: row.id } })
          break
        case 'delete':
          this.$dialog.confirm({
            title: '删除确认',
            message: `确定要删除【${row.shopName}】订单信息？`,
          }).then(async () => {
          }).catch(() => { })
          break
        case 'making':
          this.$dialog.confirm({
            title: '更改状态',
            message: `是否要将订单状态由【${row.status}】改为待取餐？`,
          }).then(async () => {
            row.status = '待取餐'
          }).catch(() => { })
          break
        case 'waiting':
          this.$dialog.confirm({
            title: '更改状态',
            message: `是否要将订单状态由【${row.status}】改为派送中？`,
          }).then(async () => {
            row.status = '派送中'
          }).catch(() => { })
          break
        case 'transport':
          this.$dialog.confirm({
            title: '更改状态',
            message: `是否要将订单状态由【${row.status}】改为已完成？`,
          }).then(async () => {
            row.status = '已完成'
          }).catch(() => { })
          break
      }
    },
  },

}
</script>
<style lang="less" scoped>
@import "./Order.less";
</style>