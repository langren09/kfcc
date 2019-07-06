<template>
    <div class="indexPage">
        <div class="content">
            <div class="title">
                <div class="header">
                    <h2 v-for="(title, index) in dataNews.title" :key="index">{{ title }}</h2>
                </div>
                <div class="moIcon">
                    <!--<li><img src="./../static/imgs/portytips.png" alt=""></li>-->
                    <ul>
                        <li v-for="(img_url, index) in img_urls" :key="index"><img :src="img_url" alt=""></li>
                    </ul>
                </div>
                <img class="bacImg" :src="imgb_url" alt="">
            </div>
            <div class="notes">
                <p>
                    <span></span>
                    {{ dataNews.noName }}
                </p>
                <p class="tisi">

                </p>
            </div>
            <div class="btn">
                <mt-button type="primary" size="large" @click="goto()">开始办理</mt-button>
            </div>
        </div>
        <footer>
            <p>{{ dataNews.ftName }}</p>
        </footer>
    </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: "indexPage",
    data() {
      return {
        dataNews: {
        },
        img_urls: [
          // 动态路径数据写入绝对地址
          'http://www.delytech.com/kfcc/src/static/imgs/portytips.png',
          'http://www.delytech.com/kfcc/src/static/imgs/portytips.png',
          'http://www.delytech.com/kfcc/src/static/imgs/portytips.png'
        ],
        imgb_url: 'http://www.delytech.com/kfcc/src/static/imgs/bacimg.png',
        code: 'kf420'
      }
    },
    created() {
    //  1. 根据参数获取信息
      this.getNews()
    //  2. 点击跳转页面
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
              name: 'classes',
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
    .indexPage {
        width: 100%;
        padding-bottom: 50px;
        /*background-color: #F8F8F8;*/
    }
    .content .title {
        width: 100%;
        height: 380px;
        background-color: #2A82E4;
        position: relative;
    }
    .content .title .header h2 {
        text-align: center;
        font-size: 1.6em;
        color: #fff;
        font-weight: 600;
        line-height: 2.0em;
        text-shadow:3px 2px 3px #666;
     }
    .content .title .header {
        padding-top: 60px;
    }
    .content .moIcon ul {
        position: absolute;
        top: 220px;
        right: 10px;
    }
    .content .moIcon ul li {
        float: left;
    }
    .content .bacImg {
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    /*中间部分*/
    .notes p {
        text-align: center;
        font-size: 1.0em;
        color: #2A82E4;
        font-weight: 600;
        margin-top: 30px;
        font-family: "微软雅黑";
    }
    .notes p span{
        display: inline-block;
        width: 32px;
        height: 32px;
        background: url("./../static/imgs/tips.png") no-repeat;
        position: relative;
        top: 8px;
    }
    .btn button{
        background-color: #2A82E4;
        width: 92%;
        margin-left: 4%;
        height: 44px;
    }
    /*底部*/
    footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 50px;
        background-color: #E5E5E5;
    }
    footer p {
        text-align: center;
        font-size: 0.8em;
        color: #aaa;
        font-weight: 500;
        line-height: 50px;
    }
    /*提示框信息*/
    .mint-msgbox-content .mint-msgbox-title {
        color: red;
    }
    .mint-msgbox .mint-msgbox-content .mint-msgbox-message {
        color: #333!important;
        margin: 0;
        text-align: left;
        line-height: 36px;
    }
</style>
