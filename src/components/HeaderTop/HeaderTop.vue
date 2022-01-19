<template>
  <div style="height: auto" class="header">
    <slot name="left"></slot>
    <div class="search">
      <van-field
        class="seaInp"
        placeholder="请输入内容"
        left-icon="search"
        v-model="title"
      >
      </van-field>
    </div>
    <slot name="right"></slot>
  </div>
</template>
<script>
    export default {
        props:{
            title:String
        }
    }
</script>
<style lang="less">
    .header{
    width: 100%;
    background-color: rgba(233, 233, 33, 0.911);
    border-bottom: 1px solid rgba(233, 233, 33, 0.911);
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    .mess{
        // width: 50px;
        background-color: rgba(233, 233, 33, 0.911);
        text-align: center;
        em{
            display: block;
            font-weight: 600;
        }
        .temperat{
            font-size: 12px;
            color: black;
            font-weight: normal;
        }
    }
    .tool{
        width: 80px;
        text-align: center;
        background-color: rgba(233, 233, 33, 0.911);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        .say{
            width: 32px;
            height: 32px;
            background: url(../../common/images/voice.png) center center / 32px 32px no-repeat;
        }
        .add{
            width: 32px;
            height: 32px;
            background: url(../../common/images/add.png) center center / 32px 32px no-repeat;
        }
    }
    .search{
        padding: 0 10px;
        flex: 1;
        .van-cell{
            border-radius: 20px;
        }
    }
}
</style>
