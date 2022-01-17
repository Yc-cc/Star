<template>
  <div class="pages">
    <div v-show="!showLogin"
         class="welcome">
      <div class="title">
        <span>星外卖</span>
        <em>{{welText}}</em>
      </div>
      <!-- 在组件上添加的事件不再是组件的原生事件，需要使用修饰符：'.native' -->
      <van-circle v-model="currentRate"
                  @click.native="closeWelcome"
                  :rate="100"
                  size="40px"
                  :clockwise="false"
                  :text="`${Math.ceil(currentRate/20)}s`" />
    </div>
    <div v-show="showLogin"
         class="body">
      <van-sticky>
        <!-- <div style="height:auto" class="header">
                    <div class="mess" @click="mapShow">
                        <em class="city">{{city}}</em>
                        <em class="temperat">{{briefNew}} {{tmpNew}}℃</em>
                    </div>
                    <div class="search">
                        <van-field class="seaInp"
                            placeholder="请输入内容"
                            left-icon="search"
                            v-model="city">
                        </van-field>
                    </div>
                    <div class="tool">
                        <div class="say" @click="backLogin"></div>
                        <div class="add"></div>
                    </div>
                </div> -->
        <HeaderTop :title="address.name">
          <div class="mess"
               @click="mapShow"
               slot="left">
            <em class="city">{{city}}</em>
            <em class="temperat">{{briefNew}} {{tmpNew}}℃</em>
          </div>
          <div class="tool"
               slot="right">
            <div class="say"
                 @click="backLogin"></div>
            <div class="add"></div>
          </div>
        </HeaderTop>
      </van-sticky>
      <div class="mainBox">
        <div class="toolBox">
          <div class="sao boxItem">
            <div class="simg"></div>
            <strong>扫一扫</strong>
          </div>
          <div class="pay boxItem">
            <div class="pimg"></div>
            <strong>付款码</strong>
          </div>
          <div class="bag boxItem">
            <div class="himg"></div>
            <strong>红包</strong>
          </div>
          <div class="ride boxItem">
            <div class="qimg"></div>
            <strong>骑车</strong>
          </div>
        </div>
        <div v-if="mapBlooean"
             id="container"
             class="allmap"></div>
        <div class="mainPart">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-starmeituan"></div>
                    <span>外卖</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starmeishi"></div>
                    <span>美食</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starjiudian"></div>
                    <span>酒店</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starziyuan"></div>
                    <span>休闲</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-stardianying"></div>
                    <span>电影</span>
                  </div>
                </div>
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-starqiche"></div>
                    <span>打车</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starlifa"></div>
                    <span>理发</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starbianlidian"></div>
                    <span>便利店</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-staryaoxiang"></div>
                    <span>买药</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starhuochepiao"></div>
                    <span>火车票</span>
                  </div>
                </div>
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-staryouxuan"></div>
                    <span>优选</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starguoshu"></div>
                    <span>水果</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starqian"></div>
                    <span>现金</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-staryiliaojigou"></div>
                    <span>医疗</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starpaotuiAPP"></div>
                    <span>跑腿</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-starjiaoyin"></div>
                    <span>足疗</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starxiyu"></div>
                    <span>洗浴</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starKTV"></div>
                    <span>KTV</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starhongbao"></div>
                    <span>签到</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-startaoxin"></div>
                    <span>结婚</span>
                  </div>
                </div>
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-starshenghuofuwu"></div>
                    <span>生活</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starchongwu"></div>
                    <span>宠物</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starziyuan4"></div>
                    <span>周边游</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starshouye1"></div>
                    <span>红包</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starqichedingwei"></div>
                    <span>养车</span>
                  </div>
                </div>
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-starmeitimeirong"></div>
                    <span>美容</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starxuexi"></div>
                    <span>学习</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starjianshen"></div>
                    <span>健身</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starjingdian"></div>
                    <span>景点</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starshouye"></div>
                    <span>商城</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-starshucai_huabanfuben"></div>
                    <span>送菜</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starwanwu"></div>
                    <span>电玩</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starjieqian"></div>
                    <span>借钱</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starqichepiao"></div>
                    <span>汽车票</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starjiuba"></div>
                    <span>酒吧</span>
                  </div>
                </div>
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-starshoujichongzhi"></div>
                    <span>充值</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-staryuechi"></div>
                    <span>密室</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starzhuangxiu"></div>
                    <span>装修</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starqinzi"></div>
                    <span>亲子</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starqian"></div>
                    <span>有钱</span>
                  </div>
                </div>
                <div class="topTool">
                  <div class="toolItem">
                    <div class="iconfont icon-staricon-test"></div>
                    <span>玩一玩</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starshenghuojiaofei"></div>
                    <span>缴费</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-stardiqiu"></div>
                    <span>新奇</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starmuyingchanpin"></div>
                    <span>母婴</span>
                  </div>
                  <div class="toolItem">
                    <div class="iconfont icon-starchongdianbao"></div>
                    <span>充电宝</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-pagination"></div>
          </div>

          <ShopList />

          <FooterGuide />
        </div>
      </div>
    </div>
    <div v-if="!bottomTitle"
         class="right-info">&copy; 2021- yc copy right</div>
  </div>

</template>

<script>
//引入BMap
import { BMPGL } from '../Home/baidu'
import { loadBMap } from '../Home/loadResources'

//引入swiper
import Swiper from 'swiper'
import '../../common/style/swiper/css/swiper.min.css'


//引入底部组件
import FooterGuide from "../../components/FooterGuide/FooterGuide.vue"

//引入头部组件
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

//引入商家组件
import ShopList from "../../components/ShopList/ShopList.vue"

import {mapState,mapActions,mapMutations} from 'vuex'

export default {

  components: {
    FooterGuide,
    HeaderTop,
    ShopList,
  },
  data () {
    return {
      province: '',
      city: '',
      tmpNew: '',
      briefNew: '',
      ak: '9vjGWGC1NglGe8Ue31WlEANldnxWqmH0',
      mymap: null,
      mapBlooean: false,
      posiValue: { longitude: '', latitude: '' },
      showLogin: false,
      welText: [
        '正月晴和风气新，纷纷已有醉游人',
        '新年都未有芳华，二月初惊见草芽',
        '故人西辞黄鹤楼，烟花三月下扬州',
        '人间四月芳菲尽，山寺桃花始盛开',
        '五月天山雪，无花只有寒',
        '毕竟西湖六月中，风光不与四时同',
        '七月七日长生殿，夜半无人私语时',
        '八月秋高风怒号，卷我屋上三重茅',
        '可怜九月初三夜，露似真珠月似弓',
        '不知十月江寒上，陡觉三更布被轻',
        '十一月中长至夜，三千里外远行人',
        '寒冬十二月，晨起践严霜'
      ][new Date().getMonth()],
      currentRate: 100,
      bottomTitle: false,
      loopTimer: null,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },

  mounted () {
    //创建一个swiper实例对象，来实现轮播
    var mySwiper = new Swiper('.swiper', {
      loop: true,//可以循环轮播
      observer: true,
      observeParents: true,

      //如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  },

  created () {
    window.initBaiduMapScript = () => {
      // console.log(BMap);
      this.getlocation();
    }
    loadBMap('initBaiduMapScript');
    this.loop()
  },

  computed:{
    ...mapState(['address'])
  },

  methods: {
    ...mapActions(['getAddress']),
    ...mapMutations(['updateAddress']),
    backLogin () {
      localStorage.removeItem('auto-token')
      this.$router.push('/login')
    },
    getList() {
      reqFoodCategorys({
    
      }).then((res) => {
        if (res.code === 0) {
          this.GoodsList = res.data
          console.log(this.GoodsList);
        } else {
          this.$message.error(res.message || '没有数据!')
        }
      }).catch((err) => {
        console.log('ERR:', err)
        this.$message.error('接口返回错误!')
      })
    },

    //获取当前经纬度
    getlocation () {
      let that = this
      this.$nextTick(function () {
        try {
          const geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function (r) {
            // console.log(r);
            const localLatitude = r.latitude
            const localLongitude = r.longitude
            const localAddress = {'latitude':localLatitude,'longitude':localLongitude}
            //修改state中的经纬度
            // that.$store.commit('updateAddress',localAddress)
            that.updateAddress(localAddress)
            //调用硅谷获取地址方法
            // that.$store.dispatch('getCategorys')
            that.getAddress()
            //拿到最新地址
            // that.detailedCity = (that.$store.state.address.address).substring(6)
            that.province = r.address.province
            that.city = r.address.city
            that.searchWeather(r.address.city)
            that.posiValue.longitude = r.longitude
            that.posiValue.latitude = r.latitude
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
              const { lat = null, lng = null } = r.point;
            }
          });
        } catch (e) {
          console.log(e)
        }

      })
      // return posiValue
    },

    //地图绘制
    mapStart (x, y) {
      // 百度地图API功能
      // 传入密钥获取地图回调。
      BMPGL(this.ak).then((BMapGL) => {
        // 创建地图实例
        let map = new BMapGL.Map("container");
        // 创建点坐标 axios => res 获取的初始化定位坐标
        let point = new BMapGL.Point(x, y)
        // 初始化地图，设置中心点坐标和地图级别
        map.centerAndZoom(point, 19)
        //开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true)
        map.setHeading(64.5)
        map.setTilt(73)
        // 保存数据
        this.myMap = map
      })
        .catch((err) => {
          console.log(err)
        })
    },

    //地图的显示
    mapShow () {
      // let zuobiao = this.getlocation()
      // console.log(zuobiao.longitude);
      this.mapStart(parseFloat(this.posiValue.longitude), parseFloat(this.posiValue.latitude))
      this.mapBlooean = true
    },

    //获取天气方法
    searchWeather: async function (city) {//注意：这里有 async 用来完成异步操作
      //由于调用api是异步操作
      //在请求的时候需要用async+await让它同步，否则数据不好取出
      //如果没有await返回的是一个Promise 对象，我学术短浅，暂时没学到，不会取
      let key = "c03cabfc7a674806b73a6b7588aea1f6"; //引号中放入前面保存的key
      //获取城市的ID
      let httpUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${city}&key=${key}`
      let res = await fetch(httpUrl)
      let result = await res.json()
      let id = result.location[0].id
      //根据城市id获取具体的天气
      let httpUrl1 = `https://devapi.qweather.com/v7/weather/now?location=${id}&key=${key}`
      let res1 = await fetch(httpUrl1)
      let result1 = await res1.json()
      let now = result1.now
      this.tmpNew = now.temp
      this.briefNew = now.text
    },

    //跳过欢迎页面
    closeWelcome () {
      clearTimeout(this.loopTimer)
      this.showLogin = true
      this.bottomTitle = true
      /* if(this.autoFinish === 'init'){
          this.showLogin=true
      }else{
          // this.$router.push('/home')
          this.bottomTitle = true
      } */
    },
    
    //倒计时
    loop () {
      this.loopTimer = setTimeout(() => {
        this.currentRate -= 1
        if (this.currentRate > 0) {
          this.loop()
        } else {
          this.showLogin = true
          this.bottomTitle = true
          /* // 执行页面的跳转业务
          if (this.autoFinish === 'init') {
              this.showLogin = true
          } else {
              this.$router.push('/home')
          } */
        }
      }, 50)
    },
    
  }

}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>


