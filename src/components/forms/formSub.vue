<template>
    <div class="formSub">
        <navbar :title="navTitle"></navbar>
        <form action="">
            <!--提交信息界面-->
            <form-xx v-if="pageBl" @loadPage="loadflag"></form-xx>
            <form-yw v-if="!pageBl"></form-yw>
            <div class="btn" v-if="!pageBl">
                <mt-button class="btnPri" type="primary" size="large" @click="next()">确认提交</mt-button>
            </div>
        </form>
        <!--<md-checkbox :sel-label="selLab" @getSelVal="getSelflog"></md-checkbox>-->
    </div>
</template>

<script>
  export default {
    name: "formSub",
    data() {
      return {
        navTitle: '开封公安出入境自助办证申请系统',
        pageBl: false,
        // selLab: '护照'
      }
    },
    created() {
    //  监听checkbox传值
    },
    methods: {
      loadflag(data) {
        // 接收到的参数在data中
        this.pageBl = !data
      },
      // // 监听获取子组件传值
      // getSelflog(data) {
      //   console.log(data)
      // }
    }
  }
</script>

<style scoped>
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