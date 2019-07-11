<template>
    <div class="popup">
        <!--弹出框-->
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="popupDataMd.slots" @change="onValuesChange" showToolbar>
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
    </div>
</template>

<script>
  export default {
    name: "popup",
    data() {
      return {
        showToolbar: true,
        message: '',
        popupDataMd: '',
        popupVisible: false,
      }
    },
    created() {
        // 初始化界面
        this.popupDataMd = this.popupData;
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
    methods: {
      onValuesChange(picker, values) {
        this.message = values;
        if(values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      },
      hideCancel() {
        // 子传父
        // console.log(this.popupDataMd.fnName);
        this.$emit(this.popupDataMd.fnName, '');
        this.popupVisible = !this.popupVisible;
        // console.log(this.popupData)
      },
      hideSure() {
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