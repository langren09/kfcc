<template>
    <div class="formSure">
        <!--确认信息界面-->
        <!--第四步-->
        <steps :currentVal="step"></steps>
        <div class="content">
            <ul class="news clearFix">
                <li class="clearFix">
                    <p>姓名</p>
                    <p class="perName">张三</p>
                </li>
                <li>
                    <p>身份证号码</p>
                    <p>41101123512354562</p>
                </li>
                <li class="ywlx clearFix">
                    <p>办理业务</p>
                    <p class="yw">
                        <span>护照（代办）</span>
                        <span>港澳签注（代办）</span>
                        <span>台湾通行证（代办）1年一次</span>
                    </p>
                </li>
                <li>
                    <p>提交时间</p>
                    <p>2019-06-28 21:22:01</p>
                </li>
            </ul>
        </div>
        <div class="btn">
            <mt-button class="btnPri btnBack" type="default" size="normal" @click="next()">返回修改</mt-button>
            <mt-button class="btnPri btnSur" type="primary" size="normal" @click="goback()">确认无误</mt-button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "formSure",
    data() {
      return {
        step: 4
      }
    }
  }
</script>

<style scoped>
    .content {
        margin: 10px 10px;
    }
    .content .news{
        padding: 10px;
        background-color: #fff;
        border-radius: 3px;
    }
    .content .news li>p {
        /*display: inline-block;*/
        line-height: 2.2em;
        float: left;
        font-size: 0.9em;
        color: #333;
        width: 30%;
    }
    .content .news li>p:nth-child(odd) {
        float: left;
        font-size: 0.9em;
        color: #333;
        width: 30%;
    }
    .content .news li>p:nth-child(even) {
        float: right;
        text-align: right;
        color: #555;
        width: 70%;
    }
    .news li:nth-child(1) {
        border-bottom: 1px solid #eee;
    }
    .news li:nth-child(1)>p:nth-child(2){
        font-size: 1.1em;
        font-weight: 500;
    }
    /*办理业务*/
    .news li.ywlx>p span {
        display: block;
    }
    /*按钮样式*/
    .btn {
        margin: 30px 0;
    }
    .btn .btnPri {
        display: inline-block;
        /*background-color: #2A82E4;*/
        margin: 0 3%;
        width: 42%;
    }
    .btn .btnBack {
        background-color: #fff;
    }
    .btn .btnSur {
        background-color: #51AA40;
    }
</style>