<template>
    <div class="classess">
        <header>
            <h2>内地居民办理出入境证件申请</h2>
            <img src="" alt="">
        </header>
        <div class="content">
            <div class="nav">
                <a href="">申请人类别</a>
            </div>
            <div class="selAll">
                <p>请选择您属于哪一类人员？</p>
                <ul>
                    <li v-for="(sel, index) in selData" :key="index">
                        <mt-button class="btnPri" type="primary" size="large">{{ sel }}</mt-button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "classes",
    data() {
      return {
        selData: [
          '开封本地户籍居民',
          '河南省其他地市户籍居民',
          '外省户籍居民',
          '已备案国家工作人员'
        ]
      }
    },
    created() {
    //  1. 根据参数获取数据
    //   this.getSelData()
    },
    methods: {
      // getSelData() {
      //   this.$this.get('',)
      // }
    }
  }
</script>

<style scoped>
    /*标题样式*/
    header {
        height: 60px;
        background-color: #2A82E4;
        width: 100%;
        border-bottom: 2px solid #FFB211;
    }
    header h2{
        text-align: center;
        font-size: 1.2em;
        color: #eee;
        font-weight: 600;
        line-height: 60px;
    }
    /*选择项内容*/
    .content {
        padding: 20px 10px;
    }
    .content .nav a{
        display: inline-block;
        background-color: #ddd;
        padding: 2px 14px;
        font-size: 0.8em;
        color: #777;
        font-weight: 400;
    }
    .content .selAll{
        margin-top: 40px;
    }
    .content .selAll>p{
        line-height: 40px;
        height: 40px;
        font-size: 1.2em;
        color: #2A82E4;
        font-weight: 600;
    }
    .content .selAll>ul{
        margin-top: 16px;
    }
    .content .selAll>ul .btnPri{
        margin-top: 16px;
        background-color: #2A82E4;
    }
</style>