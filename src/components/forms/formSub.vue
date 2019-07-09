<template>
    <div class="formSub">
        <navbar :title="navTitle"></navbar>
        <form action="">
            <!--提交信息界面-->
            <form-xx v-if="pageXx" @loadPageYw="loadflagYw"></form-xx>
            <form-yw v-if="pageYw" @loadPageSure="loadflagSure" @loadPageXx="loadflagXx"></form-yw>
            <form-sure v-if="pageSure" @loadPageYw="loadflagYw"></form-sure>
            <div class="btn" v-if="pageBtn">
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
        pageXx: true,
        pageYw: false,
        pageSure: false,
        pageBtn: false
      }
    },
    created() {
    //  监听checkbox传值
    },
    methods: {
      loadflagYw(data) {
        // 接收到的参数在data中
        this.pageYw = true;
        this.pageXx = false;
        this.pageSure = false;
      },
      loadflagSure(data) {
        // 接收到的参数在data中
        this.pageSure = true;
        this.pageYw = false;
        this.pageXx = false;
      },
      loadflagXx(data) {
        // 接收到的参数在data中
        this.pageXx = true;
        this.pageYw = false;
        this.pageSure = false;
      },
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