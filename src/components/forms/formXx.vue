<template>
    <div class="formXx">
        <!--第二步-->
        <steps :currentVal="step"></steps>
        <!--表单全局组件-->
        <section class="jbXx">
            <div class="nav">
                <a href="">申请人基本信息</a>
            </div>
            <mt-field label="身份证号码" placeholder="18位身份证号码" state="success"></mt-field>
            <mt-field label="姓名" placeholder="请输入全名"></mt-field>
            <mt-field label="中文姓" placeholder="只输入您的姓氏"></mt-field>
            <mt-field label="中文名" placeholder="只输入名（不含姓氏）"></mt-field>
            <mt-field label="民族" placeholder="请选择"></mt-field>
            <mt-field label="户籍地" placeholder="请选择户口所在地"></mt-field>
            <mt-field label="出生地" placeholder="请选择出生地"></mt-field>
            <mt-field label="手机号码" placeholder="请输入申请人的手机号码" type="tel"></mt-field>
        </section>
        <section class="jjXx">
            <div class="nav">
                <a href="">紧急情况联系信息</a>
            </div>
            <mt-field label="紧急联系人" placeholder="可以填配偶、监护人、父母等"></mt-field>
            <mt-field label="手机号码" placeholder="紧急联系人的手机号"></mt-field>
        </section>
        <div class="btn">
            <mt-button class="btnPri" type="primary" size="large" @click="next()">下一步</mt-button>
            <mt-button class="btnPri" type="primary" size="large" @click="goback()">返回上页</mt-button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "formXx",
    data() {
      return {
        step: 2,
      }
    },
    methods: {
      next() {//  1. 判断信息输入无误
        //  2. 子组件向父组件传递参数
        // 利用emit传递参数
        this.$emit('loadPageYw', true)
      },
      goback() {
        this.$router.push({
          name: 'classes'
        })
      }
    }
  }
</script>
<style scoped>
    .formXx {
        padding: 0 10px;
    }
    /*<!--申请人信息样式-->*/
    .formXx .nav {
        margin: 10px 0;
    }
    .formXx .nav a{
        display: inline-block;
        background-color: #ddd;
        padding: 2px 14px;
        font-size: 0.8em;
        color: #777;
        font-weight: 400;
    }
    /*按钮样式*/
    .btn {
        margin: 20px 0;
        /*width: 92%;*/
        /*margin-left: 4%;*/
    }
    .btn .btnPri{
        background-color: #2A82E4;
        margin-bottom: 10px;
    }
</style>
<style>
    from {
        font-family: '微软雅黑';
    }
    /*// 表单输入样式*/
    form .mint-field .mint-cell-text {
        color: #444;
    }
    form .mint-field .mint-cell-wrapper {
        border-bottom: 1px solid #eee;
        padding: 0;
        margin: 0 10px;
    }
    form .mint-field{
        text-decoration: none;
    }
</style>