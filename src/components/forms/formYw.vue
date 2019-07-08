<template>
    <div class="formYw">
        <!--第三步-->
        <steps :currentVal="step"></steps>
        <!--业务类型-->
        <div class="selAll">
            <p>请选择您属于哪一类人员？</p>
            <section class="cl">
                <h4>办理普通护照</h4>
                <div class="sel">
                    <div class="logo">
                        <img src="./../../static/imgs/pas.png" alt="">
                    </div>
                    <ul class="lx">
                        <div class="ywzl">
                            <label for="">
                                <input type="checkbox">普通护照
                            </label>
                        </div>
                        <li>
                            <label for="">
                                <input type="checkbox">首次办理
                            </label>
                        </li>
                        <li>
                            <label for="">
                                <input type="checkbox">补发
                            </label>
                        </li>
                        <li>
                            <label for="">
                                <input type="checkbox">换发
                            </label>
                        </li>
                    </ul>
                    <!--<mt-checklist v-model="value" :options="options"></mt-checklist>-->
                </div>
            </section>
            <section class="cl">
                <h4>办理港澳通行证和签注</h4>
                <div class="sel">
                    <div class="logo">
                        <img src="./../../static/imgs/pas.png" alt="">
                    </div>
                    <ul class="lx">
                        <div class="ywzl">
                            <label for="">
                                <input type="checkbox">普通护照
                            </label>
                        </div>
                        <li>
                            <label for="">
                                <input type="checkbox">首次办理
                            </label>
                        </li>
                        <li>
                            <label for="">
                                <input type="checkbox">补发
                            </label>
                        </li>
                        <li>
                            <label for="">
                                <input type="checkbox">换发
                            </label>
                        </li>
                    </ul>
                    <!--<mt-checklist v-model="value" :options="options"></mt-checklist>-->
                </div>
            </section>
            <section class="cl">
                <h4>办理往来台湾通行证和签注</h4>
                <div class="sel">
                    <div class="logo">
                        <img src="./../../static/imgs/pas.png" alt="">
                    </div>
                    <ul class="lx">
                        <div class="ywzl">
                            <label for="">
                                <input type="checkbox">普通护照
                            </label>
                        </div>
                        <li>
                            <label for="">
                                <input type="checkbox">首次办理
                            </label>
                        </li>
                        <li>
                            <label for="">
                                <input type="checkbox">补发
                            </label>
                        </li>
                        <li>
                            <label for="">
                                <input type="checkbox">换发
                            </label>
                        </li>
                    </ul>
                    <!--<mt-checklist v-model="value" :options="options"></mt-checklist>-->
                </div>
            </section>
        </div>
    </div>
</template>

<script>
  export default {
    name: "formYw",
    data() {
      return {
        step: 3,
      }
    },
    created() {

    }
  }
</script>

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
        padding: 10px 6px 10px 0;
    }
    /*section ul.lx li input{*/
        /*margin-right: 4px;*/
    /*}*/
</style>