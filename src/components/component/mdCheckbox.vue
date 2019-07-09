<template>
    <div class="mdCheckbox">
        <!--复选框-->
        <!--父向子传初始化值-->
        <!--子向父传递选中项值selVal-->
        <input type="checkbox" class="magic-checkbox" :id="selId" v-model="selVal" required>
        <label class="checkbox control-label" :for="selId" @click="setSelVal()">{{ selLabel }}
        </label>
    </div>
</template>

<script>
  export default {
    name: "mdCheckbox",
    data() {
      return {
        selVal: false
      }
    },
    methods: {
      setSelVal() {
        this.$emit('getSelVal', [this.selId,!this.selVal])
      }
    },
    props: {
      selLabel: {
        type: String,
        required: true
      },
      selId: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
    /* 取消点击时的阴影*/
    *{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        /* For some Androids */
    }
    /*radio与checkbox样式*/
    .line{
        margin-top:10px;
    }
    @keyframes hover-color {
        from {
            border-color: #c0c0c0; }
        to {
            border-color: #16a085; } }

    .magic-radio,
    .magic-checkbox {
        position: absolute;
        display: none; }

    .magic-radio[disabled],
    .magic-checkbox[disabled] {
        cursor: not-allowed; }

    .magic-radio + label,
    .magic-checkbox + label {
        position: relative;
        display: block;
        padding-left: 30px;
        cursor: pointer;
        vertical-align: middle; }
    .magic-radio + label:hover:before,
    .magic-checkbox + label:hover:before {
        animation-duration: 0.4s;
        animation-fill-mode: both;
        animation-name: hover-color; }
    .magic-radio + label:before,
    .magic-checkbox + label:before {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 20px;
        height: 20px;
        content: '';
        border: 1px solid #c0c0c0; }
    .magic-radio + label:after,
    .magic-checkbox + label:after {
        position: absolute;
        display: none;
        content: ''; }

    .magic-radio[disabled] + label,
    .magic-checkbox[disabled] + label {
        cursor: not-allowed;
        color: #e4e4e4; }
    .magic-radio[disabled] + label:hover, .magic-radio[disabled] + label:before, .magic-radio[disabled] + label:after,
    .magic-checkbox[disabled] + label:hover,
    .magic-checkbox[disabled] + label:before,
    .magic-checkbox[disabled] + label:after {
        cursor: not-allowed; }
    .magic-radio[disabled] + label:hover:before,
    .magic-checkbox[disabled] + label:hover:before {
        border: 1px solid #e4e4e4;
        animation-name: none; }
    .magic-radio[disabled] + label:before,
    .magic-checkbox[disabled] + label:before {
        border-color: #e4e4e4; }

    .magic-radio:checked + label:before,
    .magic-checkbox:checked + label:before {
        animation-name: none; }

    .magic-radio:checked + label:after,
    .magic-checkbox:checked + label:after {
        display: block; }

    .magic-radio + label:before {
        border-radius: 50%; }

    .magic-radio + label:after {
        top: 7px;
        left: 7px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #16a085; }

    .magic-radio:checked + label:before {
        border: 1px solid #16a085; }

    .magic-radio:checked[disabled] + label:before {
        border: 1px solid #c9e2f9; }

    .magic-radio:checked[disabled] + label:after {
        background: #c9e2f9; }

    .magic-checkbox + label:before {
        border-radius: 3px; }

    .magic-checkbox + label:after {
        top: 2px;
        left: 7px;
        box-sizing: border-box;
        width: 6px;
        height: 12px;
        transform: rotate(45deg);
        border-width: 2px;
        border-style: solid;
        border-color: #fff;
        border-top: 0;
        border-left: 0; }

    .magic-checkbox:checked + label:before {
        border: #16a085;
        background: #16a085; }


    .magic-checkbox:checked[disabled] + label:before {
        border: #c9e2f9;
        background: #c9e2f9; }
    /*///////////////////////////////////*/

    .magic-radio,
    .magic-checkboxBlue {
        position: absolute;
        display: none; }

    .magic-radio[disabled],
    .magic-checkboxBlue[disabled] {
        cursor: not-allowed; }

    .magic-radio + label,
    .magic-checkboxBlue + label {
        position: relative;
        display: block;
        padding-left: 30px;
        cursor: pointer;
        vertical-align: middle; }
    .magic-radio + label:hover:before,
    .magic-checkboxBlue + label:hover:before {
        animation-duration: 0.4s;
        animation-fill-mode: both;
        animation-name: hover-color; }
    .magic-radio + label:before,
    .magic-checkboxBlue + label:before {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 20px;
        height: 20px;
        content: '';
        border: 1px solid #c0c0c0; }
    .magic-radio + label:after,
    .magic-checkboxBlue + label:after {
        position: absolute;
        display: none;
        content: ''; }

    .magic-radio[disabled] + label,
    .magic-checkboxBlue[disabled] + label {
        cursor: not-allowed;
        color: #e4e4e4; }
    .magic-radio[disabled] + label:hover, .magic-radio[disabled] + label:before, .magic-radio[disabled] + label:after,
    .magic-checkboxBlue[disabled] + label:hover,
    .magic-checkboxBlue[disabled] + label:before,
    .magic-checkboxBlue[disabled] + label:after {
        cursor: not-allowed; }
    .magic-radio[disabled] + label:hover:before,
    .magic-checkboxBlue[disabled] + label:hover:before {
        border: 1px solid #e4e4e4;
        animation-name: none; }
    .magic-radio[disabled] + label:before,
    .magic-checkboxBlue[disabled] + label:before {
        border-color: #e4e4e4; }

    .magic-radio:checked + label:before,
    .magic-checkboxBlue:checked + label:before {
        animation-name: none; }

    .magic-radio:checked + label:after,
    .magic-checkboxBlue:checked + label:after {
        display: block; }


    .magic-checkboxBlue + label:before {
        border-radius: 3px; }

    .magic-checkboxBlue + label:after {
        top: 2px;
        left: 7px;
        box-sizing: border-box;
        width: 6px;
        height: 12px;
        transform: rotate(45deg);
        border-width: 2px;
        border-style: solid;
        border-color: #fff;
        border-top: 0;
        border-left: 0; }

    .magic-checkboxBlue:checked + label:before {
        border: #3498db;
        background: #3498db;

    }


    .magic-checkboxBlue:checked[disabled] + label:before {
        border: #c9e2f9;
        background: #c9e2f9;
    }
</style>