<template>
    <div class="classess">
        <navbar :title="navTitle"></navbar>
        <!--第一步-->
        <steps :currentVal="step"></steps>
        <div class="content">
            <div class="nav">
                <a href="">申请人类别</a>
            </div>
            <div class="selAll">
                <p>请选择您属于哪一类人员？</p>
                <ul>
                    <li v-for="(sel, index) in selData" :key="index">
                        <mt-button class="btnPri" type="primary" size="large" @click="goto()">{{ sel }}</mt-button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: "classes",
    data() {
      return {
        selData: [
          '开封本地户籍居民',
          '河南省其他地市户籍居民',
          '外省户籍居民',
          '已备案国家工作人员'
        ],
        dataNews: {
        },
        step: 1,
        navTitle: '内地居民办理出入境证件申请'
      }
    },
    created() {
    //  1. 根据参数获取数据
    //   this.getSelData()
      this.getNews()
    },
    methods: {
      getNews() {
        this.$axios.get('getindexNews?', {
          params: {
            code: this.code
          }
        })
          .then( (res) => {
            // 数组合并
            // console.log(res)
            this.dataNews = res.data.data;
            // console.log( this.dataNews)
          })
          .catch( (err) => {
            console.log(err)
          })
      },
      goto() {
        //
        // console.log(this.dataNews.message);
        // 初始化数据包
        var template = '';
        for (var i=0; i<this.dataNews.message.length; i++) {
          template += '<li>'+ this.dataNews.message[i] +'</li>'
        }
        MessageBox.alert(template, '温馨提示')
          .then((res) => {
            this.$router.push({
              name: 'formSub',
              params: {
                code: this.code
              }
            })
          })
      }
    }
  }
</script>

<style scoped>
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