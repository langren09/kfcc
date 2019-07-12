<template>
    <div class="formXx">
        <!--第二步-->
        <steps :currentVal="step"></steps>
        <!--表单全局组件-->
        <section class="jbXx">
            <div class="nav">
                <a href="">申请人基本信息</a>
            </div>
            <mt-field label="身份证号码" placeholder="18位身份证号码" type="text" state="success"></mt-field>
            <mt-field label="姓名" placeholder="请输入全名" type="text" state="error"></mt-field>
            <div class="nameZh clearFix">
                <mt-field label="中文姓" placeholder="张" type="text"></mt-field>
                <mt-field label="中文名" placeholder="三" type="text"></mt-field>
            </div>
            <div class="namePy clearFix">
                <mt-field label="拼音姓" placeholder="ZHANG" type="text"></mt-field>
                <mt-field label="拼音名" placeholder="SAN" type="text"></mt-field>
            </div>
            <a class="sel mint-cell mint-field">
                <div class="mint-cell-wrapper">
                    <div class="mint-cell-title">
                        <span class="mint-cell-text">民族</span>
                    </div>
                    <div class="mint-cell-value">
                        <button placeholder="请选择民族" type="text" @focus="ShowPupMz" :class="forms.minzutextCss">{{ forms.minzu }}</button>
                        <md-popup :inval="popupDataMz.inVal" :popup-data="popupDataMz" @popupHideMz="popupHideMz"></md-popup>
                    </div>
                </div>
            </a>
            <!--<mt-field label="民族" placeholder="请选择民族" @focus.native.capture="ShowPupMz" v-model="forms.minzu" readonly="readonly"></mt-field>-->
            <!--<md-popup :inval="popupDataMz.inVal" :popup-data="popupDataMz" @popupHideMz="popupHideMz"></md-popup>-->

            <mt-field label="户籍地" placeholder="请选择户口所在地" @focus.native.capture="ShowPupHjd" v-model="forms.Hjd" readonly="readonly"></mt-field>
            <city-sel :inval="popupDataHjd.inVal" :popup-data="popupDataHjd" @popupHideHjd="popupHideHjd"></city-sel>

            <mt-field label="出生地" placeholder="请选择出生地" @focus.native.capture="ShowPupCSD" v-model="forms.CSD" readonly="readonly"></mt-field>
            <md-popup :inval="popupDataCSD.inVal" :popup-data="popupDataCSD" @popupHideCSD="popupHideCSD"></md-popup>

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
        <!--<city-sel></city-sel>-->
    </div>
</template>

<script>

  export default {
    name: "formXx",
    data() {
      return {
        step: 2,
        forms: {
            minzuPlaceholder: '请选择民族',
            minzu: '请选择民族',
            minzutextCss:'mint-field-core',
            CSDPlaceholder: '请选择民族',
            CSD: '',
            HjdPlaceholder: '请选择民族',
            Hjd:'',

        },
        popupDataMz: {
          fnName: 'popupHideMz',
          inVal: false,
          polab: '民族',
          potaps: '请选择民族',
          slots: [{
            values: []
          }],
        },
        popupDataCSD: {
          fnName: 'popupHideCSD',
          inVal: false,
          polab: '出生地',
          potaps: '请选择出生地',
          slots: [{
            values: []
          }],
        },
        popupDataHjd: {
          fnName: 'popupHideHjd',
          inVal: false,
          polab: '户籍地',
          potaps: '请选择户籍地'
        }
      }
    },
    created() {
      // 获取民族列表数据
        this.initMz();
      //  获取民族列表数据
      this.initCSD();
      //  获取户籍地列表数据
      this.initHjd();
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
      },
      // 初始化民族列表数据
      initMz() {
        this.popupDataMz.slots[0].values = this.jsonData.MinZuList;
      },
      // 初始化出生地列表数据
      initCSD() {
        // console.log(this.jsonData.CsdList);
        this.popupDataCSD.slots[0].values = this.jsonData.CsdList;
      },
      // 初始化户籍地列表数据
      initHjd() {
        // console.log(this.jsonData.CsdList);
        // this.popupDataCSD.slots[0].values = this.jsonData.CsdList;
      },
      // 父传子
      ShowPupMz() {
        // 初始化默认字体
        if (this.forms.minzu === this.forms.minzuPlaceholder) {
            this.forms.minzutextCss += ' picT'
        }
        this.popupDataMz.inVal = true;
      },
      // 父传子
      ShowPupCSD() {
        this.popupDataCSD.inVal = true;
      },
      // 父传子
      ShowPupHjd() {
        this.popupDataHjd.inVal = true;
      },
      //  民族 子传父
      popupHideMz(data) {
        this.popupDataMz.inVal = false;
        if (data !== '') {
          this.forms.minzu = data[0];
        }
      },
      //  出生地 子传父
      popupHideCSD(data) {
        this.popupDataCSD.inVal = false;
        if (data !== '') {
          this.forms.CSD = data;
        }
      },
      //  出生地 子传父
      popupHideHjd(data) {
        this.popupDataHjd.inVal = false;
        if (data !== '') {
          this.forms.Hjd = data;
        }
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
    /*文本框样式*/
    .nameZh .mint-field, .namePy .mint-field{
        float: left;
        width: 50%;
    }
    /*按钮样式*/
    .btn {
        margin: 20px 0;
    }
    .btn .btnPri{
        background-color: #2A82E4;
        margin-bottom: 10px;
    }
    /*选择框样式*/
    .sel button {
        background-color: #fff;
        text-align: left;
        color: #888;
    }
    .sel button.picT{
        color: #444;
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
        /*border-bottom: 1px solid #eee;*/
        padding: 0;
        margin: 0 10px;
    }
    form .mint-field{
        text-decoration: none;
    }
    form .mint-field .mint-cell-title {
        width: 90px;
    }
</style>