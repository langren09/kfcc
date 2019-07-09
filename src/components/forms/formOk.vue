<template>
    <div class="formOk">
        <!--提交成功界面-->
        <navbar :title="navTitle"></navbar>
        <div class="content">
            <div class="log">
                <img src="http://www.delytech.com/kfcc/src/static/imgs/right.png" alt="">
            </div>
            <div class="taps">
                <p class="tapTitle">提交成功</p>
                <p class="tapTro">请携带您的身份证前往照相时采集照片，进行后续业务的办理！</p>
            </div>
            <div class="btn">
                <mt-button class="btnPri" type="primary" size="large" @click="goback()">返回首页</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "formOk",
    data() {
      return {
        navTitle: '开封公安出入境自助办证申请系统'
      }
    },
    methods: {
      goback() {
        this.$router.push({
          name: 'index'
        })
      }
    }
  }
</script>

<style scoped>
    .content {
        width: 100%;
        margin: 0 auto;
    }
    .log {
        /*margin-top: 40px;*/
        width: 90px;
        background-color: #4caf50;
        border-radius: 50%;
        margin: 40px auto 20px auto;
    }
    img {
        width: 100%;
    }
    /*信息样式*/
    .taps p{
        text-align: center;
    }
    .taps p.tapTitle{
        text-align: center;
        font-weight: 600;
        font-size: 1.2em;
        color: #333;
    }
    .taps p.tapTro{
        text-align: center;
        margin-top: 20px;
        padding: 0 10%;
        font-weight: 600;
        font-size: 0.8em;
        color: #999;
        letter-spacing: 0.1em;
    }
    /*按钮样式*/
    .btn {
        margin-top: 20px;
        padding: 0 10px;
        /*width: 92%;*/
        /*margin-left: 4%;*/

    }
    .btn .btnPri{
        background-color: #2A82E4;
    }
</style>