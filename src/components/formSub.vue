<template>
    <div class="formSub">
        <navbar :title="navTitle"></navbar>
        <div class="content">
            <div class="nav">
                <a href="">申请人基本信息</a>
            </div>
        </div>
        <router-view></router-view>
        <!--提交信息界面-->
        <form-xx></form-xx>
    </div>
</template>

<script>
  export default {
    name: "formSub",
    data() {
      return {
        navTitle: '开封公安出入境自助办证申请系统'
      }
    }
  }
</script>

<style scoped>
    .content {
        padding: 10px 10px;
    }
    /*<!--申请人信息样式-->*/
    .content .nav a{
        display: inline-block;
        background-color: #ddd;
        padding: 2px 14px;
        font-size: 0.8em;
        color: #777;
        font-weight: 400;
    }
</style>