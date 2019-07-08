<template>
    <div class="formSub">
        <navbar :title="navTitle"></navbar>
        <form action="">
            <!--提交信息界面-->
            <form-xx v-if="pageBl" v-on:loadPage="loadflag"></form-xx>
            <form-yw v-if="!pageBl"></form-yw>
        </form>
    </div>
</template>

<script>
  export default {
    name: "formSub",
    data() {
      return {
        navTitle: '开封公安出入境自助办证申请系统',
        pageBl: false
      }
    },
    methods: {
      loadflag(data) {
        // 接收到的参数在data中
        this.pageBl = !data
      }
    }
  }
</script>

<style scoped>

</style>