<template>
    <div class="formYw">
        <!--第三步-->
        <steps :currentVal="step"></steps>
        <!--业务类型-->
        <div class="selAll">
            <p>请选择您属于哪一类人员？</p>
            <section class="cl" v-for="(ywlx, index) in ywlxArr" :key="index">
                <h4>{{ ywlx.title }}</h4>
                <div class="sel">
                    <div class="logo">
                        <img :src="ywlx.img_url" alt="">
                    </div>
                    <ul class="lx">
                        <li v-for="(selLx, index) in ywlx.selLx" :key="index">
                                <!--<input type="checkbox">{{ selLx.titleLx }}-->
                            <md-checkbox :sel-label="selLx.titleLx" :sel-id="selLx.id" @getSelVal="getSelflog"></md-checkbox>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="btn">
                <mt-button class="btnPri" type="primary" size="large" @click="next()">下一步</mt-button>
                <mt-button class="btnPri" type="primary" size="large" @click="goback()">返回上页</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "formYw",
    data() {
      return {
        step: 3,
        ywlxArr: [
          {
            title: '办理普通护照',
            img_url: 'http://www.delytech.com/kfcc/src/static/imgs/pas.png',
            selLx: [
              {
                id: 'hzyw',
                titleLx: '普通护照'
              },
              {
                id: 'hzsc',
                titleLx: '首次办理'
              },
              {
                id: 'hzbf',
                titleLx: '补发'
              },
              {
                id: 'hzhf',
                titleLx: '换发'
              },
              ]
          },
          {
            title: '办理港澳通行证和签注',
            img_url: 'http://www.delytech.com/kfcc/src/static/imgs/pas.png',
            selLx: [
              {
                id: 'gayw',
                titleLx: '港澳通行证'
              },
              {
                id: 'gasc',
                titleLx: '首次办理'
              },
              {
                id: 'gabf',
                titleLx: '补发'
              },
              {
                id: 'gahf',
                titleLx: '换发'
              },
            ]
          },
          {
            title: '办理往来台湾通行证和签注',
            img_url: 'http://www.delytech.com/kfcc/src/static/imgs/pas.png',
            selLx: [
              {
                id: 'twyw',
                titleLx: '往来台湾通行证'
              },
              {
                id: 'twsc',
                titleLx: '首次办理'
              },
              {
                id: 'twbf',
                titleLx: '补发'
              },
              {
                id: 'twhf',
                titleLx: '换发'
              },
            ]
          }
        ]

      }
    },
    created() {

    },
    methods: {
      // 监听获取子组件传值
      getSelflog(data) {
        console.log(data)
      },
      //  跳转到确认信息界面
      next() {
        //  1. 判断信息输入无误
        //  2. 子组件向父组件传递参数
        // 利用emit传递参数
        this.$emit('loadPageSure', true)
      },
      goback() {
        this.$emit('loadPageXx', true)
      }
    }
  }
</script>

<style>
    /*复选框样式*/
    section .magic-checkbox+label{
        font-weight: 500;
        color: #666;
        font-size: 0.9em;
    }
    ul.lx .magic-checkbox+label:before{
        width: 18px;
        height: 18px;
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

<style scoped>
    .formYw {
        padding: 0 10px;
    }
    .formYw .selAll>p{
        line-height: 40px;
        height: 40px;
        font-size: 1.2em;
        color: #2A82E4;
        font-weight: 600;
    }
    /*业务类型样式*/
    section {
        margin-top: 10px;
        padding: 6px 10px;
        background-color: #F7F7D0;
        border-radius: 3px;
    }
    section .logo {
        display: inline-block;
        padding: 10px 6px 10px 0;
    }
    section .lx {
        display: inline-block;
    }
    section ul.lx li {
        display: inline-block;
        padding: 10px 10px 10px 0;
    }
    section ul.lx li:first-child {
        display: block;
        padding: 15px 0 0 0;
    }
    /*section ul.lx label{*/
        /*font-weight: 500;*/
        /*color: #666;*/
        /*font-size: 0.9em;*/
    /*}*/
    /*section ul.lx li input{*/
        /*margin-right: 4px;*/
    /*}*/
    /*section .ywzl input{*/
        /*margin-right: 4px;*/
    /*}*/
</style>