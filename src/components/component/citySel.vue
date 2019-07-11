<template>
    <!--省市区三级联动菜单-->
    <div class="citySel">
        <!--弹出框-->
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="areaList" @change="onValuesChange" showToolbar>
                    <div class="picker-toolbar-title">
                        <div class="usi-btn-cancel" @click="hideCancel()">取消</div>
                        <div class="">{{ popupDataMd.potaps }}</div>
                        <div class="usi-btn-sure" @click="hideSure()">确定</div>
                    </div>
            </mt-picker>
        </mt-popup>
        <div v-show="false" class="my-content-list">
             <div><span style="margin-right: 0.6rem;">{{ popupDataMd.polab }}: </span><input class="text-hui" v-model="message" placeholder="请选择" /></div>
        </div>
        <!--<mt-picker :slots="areaList" @change="onValuesChange"></mt-picker>-->
    </div>
</template>

<script>
  export default {
    name: "citySel",
    data() {
      return {
        showToolbar: true,
        message: '',
        popupDataMd: '',
        popupVisible: false,//初始选中地区的弹窗为关闭状态
        areaList:[
          {                       //一级   省
            flex: 1,
            values: ["请选择"],
            className: 'slotPro',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot1'
          }, {                    //二级   市
            flex: 1,
            values: ["请选择"],
            className: 'slotCity',
            textAlign: 'center'
          },{
            divider: true,
            content: '-',
            className: 'slot1'
          },{                     //三级   区
            flex: 1,
            values: ["请选择"],
            className: 'slotArea',
            textAlign: 'center'
          }
        ],
        areas: '',
        proCode: 0,
        cityCode:0,
        areaCode:0
      }
    },
    props: {
      inval: {
        type: Boolean,
        default: false
      },
      popupData: {
        type: Object,
      },
    },
    watch: {
      inval() {
        this.popupVisible = this.inval;
      },
      //判断选择地区弹窗的状态
      popupVisible: function(newvs){
        if(newvs){ //如果areaVisible的值为true,说明弹窗出现
          this.closeTouch(); //阻止body滑动
        }else{ //如果areaVisible的值为false，说明弹窗隐藏
          this.openTouch();//恢复body滑动
        }
      }
    },
    created() {
      this.popupDataMd = this.popupData;
      this.areaVisible = true;
        // 初始化省级列表界面
        // var pros = ['请选择'];
        var pros = [];
        this.areas = this.city.cityList;
        // 先将省级地区初始化上去
        for(var i=0; i<this.areas.length; i++) {
            pros.push(this.areas[i].name);
        }
        this.areaList[0].values = pros
    },
    methods: {
      // 动态渲染市区界面
      onValuesChange(picker, values) {
      //  获取省级选中值，通过省级取值，调取市级取值
        var citys = [];
        var areas = [];
        var cityObj = {};
        var areaObj = {};
        for(var i=0; i<this.areas.length; i++) {
          if(values[0] === this.areas[i].name) {
            this.proCode = i;
            cityObj = this.areas[this.proCode]
          }
        }
        // 处理城市列表
        if(cityObj.sub !== undefined) {
          for(var i=0; i<cityObj.sub.length; i++) {
            citys.push(cityObj.sub[i].name);
          }
          // 复制城市列表
          picker.setSlotValues(1, citys);
        }
        // 处理地区列表
        for(var i=0; i<citys.length; i++) {
          if(values[1] === citys[i]) {
            this.cityCode = i;
            areaObj = cityObj.sub[this.cityCode];
          }
        }
        // 复制地区列表
        // 处理城市列表
        if(areaObj.sub !== undefined) {
          for(var i=0; i<areaObj.sub.length; i++) {
            areas.push(areaObj.sub[i].name);
          }
          // 复制地区列表
          picker.setSlotValues(2, areas);
        }
        console.log(values);
      //  处理选项项内容
      //  处理直辖的市区重复问题
        if(values[1] === values[2]) {
          this.message = values[0] + values[1];
        } else if((values[0]==="请选择")||(values[1]==="请选择")||(values[2]==="请选择")) {
          this.message = '';
        } else {
          this.message = values[0] + values[1] + values[2];
        }
      },
      // 取消与确定绑定事件
      hideCancel() {
        // 子传父
        // console.log(this.popupDataMd.fnName);
        this.$emit(this.popupDataMd.fnName, '');
        this.popupVisible = !this.popupVisible;
      },
      hideSure() {
        // 判断是否存在'请选择'项
        if(this.message.indexOf('请选择') > 0) {
          this.message = ''
        }
        // 子传父
        this.$emit(this.popupDataMd.fnName, this.message);
        this.popupVisible = !this.popupVisible
      },

      /*解决iphone页面层级相互影响滑动的问题*/
      closeTouch: function () {
        document.getElementsByTagName("body")[0].addEventListener('touchmove',
          this.handler, {passive: false});//阻止默认事件
        console.log("closeTouch haved happened.");
      },
      openTouch: function () {
        document.getElementsByTagName("body")[0].removeEventListener('touchmove',
          this.handler, {passive: false});//打开默认事件
        console.log("openTouch haved happened.");
      }

     /*清除弹出框时禁止输入法弹出*/


    }

  }
</script>

<style scoped>
    /*// 底边弹出框*/
    .mint-popup-bottom {
        width: 100%;
    }
    .picker-toolbar-title {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
    }
    .usi-btn-cancel,
    .usi-btn-sure
    {
        color: #FF6600
    }
</style>