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