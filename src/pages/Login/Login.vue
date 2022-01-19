<template>
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">星外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
            <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login" ref="Loginform">
            <div :class="{on: loginWay}">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" >
                <button :disabled="!rightPhone" class="get_verification"
                        :class="{right_phone: rightPhone}"
                        @click.prevent="getCode">{{computeTime>0? `已发送(${computeTime})s` : '获取验证码'}}</button>
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="6" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册星外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on: !loginWay}">
              <section>
                <section class="login_message">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                </section>
                <section class="login_verification">
                  <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                  <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                  <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd = !showPwd">
                    <div class="switch_circle" :class="{right:showPwd}"></div>
                    <span class="switch_text">{{showPwd?'123':'...'}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="4" placeholder="验证码" v-model="captcha">
                  <img class="get_verification captcha" ref="captcha" src="http://localhost:4000/captcha" alt="captcha">
                  <span class="captchaTurn" @click="getCaptcha">换一张</span>
                </section>
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-starzuojiantou1"></i>
        </a>
      </div>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></AlertTip>
    </section>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {reqSendCode,reqPwdLogin,reqSmsLogin} from '../../api/index'
const PHONE_URL = '/phoneaddress'
    export default {
        components:{
          AlertTip
        },
        data() {
            return {
                loginWay: true, // true代表短信登陆, false代表密码
                computeTime:0, //短信计时
                messTimer:'', //短信定时器标识
                showPwd:false, //是否显示密码
                phone: '', //输入的手机号
                pwd:'', //输入的密码
                name:'', //输入的用户名
                code:'', //短信验证码
                captcha:'', //图形验证码
                alertText:'xxxx', //提示框文本
                alertShow:false, //提示框是否显示
            }
        },
        computed:{
          rightPhone(){
            return /^1(3|4|5|7|8)\d{9}$/.test(this.phone)
          }
        },
        methods: {
          //异步获取手机验证码
          async getCode(){
            //发送请求，查看手机号是否存在
            this.getPhoneAddress(this.phone)
            //倒计时
            if(!this.computeTime){
              //初始倒计时30s
              this.computeTime = 30
              this.messTimer = setInterval(() => {
                this.computeTime--
                if(this.computeTime<=0){
                  clearInterval(this.messTimer)
                }
              }, 1000);
              //发送短信
              const result = await reqSendCode(this.phone)
              if(result.code === 1){
                //显示获取短信失败
                this.showAlert(result.msg)
                //停止倒计时
                if(this.computeTime){
                  this.computeTime = 0
                  clearInterval(this.messTimer)
                  this.messTimer = undefined
                }
              }
            }
          },
          //获取手机号是否存在
          getPhoneAddress:async function(phone){
            const key = 'c99de5f752f301bc528c574779c05441'
            const demo = await this.$axios.get(`${PHONE_URL}?phone=${phone}&key=${key}`)
            const result = demo.data
            if(result.resultcode !== "200"){
              this.showAlert('手机号不存在！')
              return
            }
          },
          //切换图形验证码
          getCaptcha(){
           this.$refs.captcha.src = 'http://localhost:4000/captcha?time='+Date.now()
          },
          //显示提示框
          showAlert(alertText){
            this.alertShow = true
            this.alertText = alertText
          },
          //关闭提示框
          closeTip(){
            this.alertShow = false
            this.alertText = ''
          },
          //登录表单验证
          async login(){
            let result
            if(this.loginWay){  //短信验证
              const {phone,code,rightPhone} = this
              if(!rightPhone){
                this.showAlert('手机号格式不正确！')
                return
              }else if(!/^\d{6}$/.test(code)){
                this.showAlert('验证码有误！')
                return
              }

              //发送请求短信登录
              result = await reqSmsLogin(phone,code)

            }else{  //密码验证
              const {name,pwd,captcha} = this
              if(!name){
                this.showAlert('用户名不能为空！')
                return
              }else if(!pwd){
                this.showAlert('密码不能为空！')
                return
              }else if(!captcha){
                this.showAlert('验证码不能为空！')
                return
              }

              //发送请求密码登录
              result = await reqPwdLogin({name,pwd,captcha})

            }

            if(result.code === 0){
              const user = result.data
              //将user保存到vuex的state中去
              this.$store.dispatch('getUserInfo',user)
              //路由跳转到个人信息页
              this.$router.replace('/personal')
              //清除表单数据
              this.$refs.Loginform.reset()
            }else{
              const msg = result.msg
              //更新图形验证码
              this.getCaptcha()
              //显示错误提示
              this.showAlert(msg)
              //清除输入框
              this.captcha = ''
            }
          }
        },
    }
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>