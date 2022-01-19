<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(s,index) in starClass" :key="index" :class="s"></span>
  </div>
</template>
<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  props:{
    score:Number,
    size:Number
  },
  computed:{
    starClass(){
      const {score} = this
      //星星的数组
      const scsArr = []
      //向scsArr中添加n个CLASS_ON
      const scsIntenger = Math.floor(score) //整数部分
      for (let i = 0; i < scsIntenger; i++) {
        scsArr.push(CLASS_ON)        
      }
      //向scsArr中添加0/1个CLASS_HALF
      if(score*10-scsIntenger*10>=5){
        scsArr.push(CLASS_HALF) //小数部分大于0.5
      }
      //向scsArr中添加n个CLASS_OFF
      while(scsArr.length<5){
        scsArr.push(CLASS_OFF)  //填满剩余
      }

      return scsArr
    }
  }
}
</script>
<style lang="less" scoped>

.star { //2x图 3x图
  float: left;
  font-size: 0px;
  .star-item{
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48{
    .star-item{
      width: 20px;
      height: 20px;
      // margin-right: 22px;
      background-size: 20px 20px;
      &:last-child{
        margin-right: 0px;
      }
      &.on{
        background: url('./images/star24_on@2x.png');
      }
      &.half{
        background: url('./images/star24_half@2x.png');
      }
      &.off{
        background: url('./images/star24_off@2x.png');
      }
    }
  }
  &.star-36{
    .star-item{
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child{
        margin-right: 0px;
      }
      &.on{
        background-image: './images/star36_on@2x.png';
      }
      &.half{
        background-image: './images/star36_half@2x.png';
      }
      &.off{
        background-image: './images/star36_off@2x.png';
      }
    }
  }
  &.star-24{
    .star-item{
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child{
        margin-right: 0px;
      }
      &.on{
        background: url('./images/star24_on@2x.png');
      }
      &.half{
        background: url('./images/star24_half@2x.png');
      }
      &.off{
        background: url('./images/star24_off@2x.png');
      }
    }
  }
} 

</style>