### 论证后结论
- 使用 脚手架 工具搭建，打包后修改使用cdn形式引入文件
- 选择前框框架 mint-ui ,局部引入组件

### 开发流程
- 提取提示信息为组件，将第二页显示提示信息
- 注册全局组件的问题
    + 一定要注意，注册的名字必须加上引号，是字符串形式
    ```javascript
      Vue.component('note', Note);
    ```
- 目前获取的数据都是相同的，例如提示信息都是一样的，也没有做优化
- 提示以后跳转的信息也是死的，非动态的（以name为主）
- 以注册全局组件的方式模块化处理事项吧

#### 问题点
- 提交界面返回两页          (暂时添加返回按钮)
- 提交信息返回时需要全部缀上  （判定后再写）
- 先添加个上一步           （添加的按钮）
- 注册个复选框组件          （已完成）
- 确认信息界面            ok
- 提交成功界面            ok
- 表单排版-中文姓名拼音姓名 
    + 先排版
    + 在修改文本框特性
    + 动态调取校验等
- 提示文字
- 表单选择框
- 调取拼音
- 查找下身份证键盘    (ios/anroad)




### 接口文档
- 首页获取信息
 + url :  https://www.easy-mock.com/mock/5d171b2ba31bc21d4c437698/kfmobile/getindexNews
 + 方式： get
 + 参数： code:'kf420'
 + 数据：{
        "data": {
          "title": [
            "内地居民办理出入境证件",
            "智慧导办系统"
          ],
          "noName": "开封市市民之家出入境接待大厅",
          "ftName": "开封市公安局出入境管理支队",
          "dateTime": "2019-06-29 18:26:56",
          "code": "kf420"
        }
      }
      
### 使用git进行版本管理
- 创建 dev 分支作为开发分支
- 注意管理好分支，一般情况不要修改`master`，避免与 dev 分支造成冲突
- 每个分支的的日志是不同的
- 分支没有修改后内容后没有提交是无法操作切换分支的
- 版本回退： `git reset --hard 版本号前几位`
- 关闭 `git bush` 窗口并不会影响分支的操作（即会保持原分支状态）

- 注意点
    + 只有提交后才会有版本号，所以建议开发中经常在节点处提交项目内容
    + 关于何时合并到主分支的情况，待考虑
    
    
### webpack 使用
- 目前 webpack 是按照2.1的版本安装的，后期可能需要升级
- 其中安装的版本是： 
    ```
    # 对于 webpack 2
    npm install --save-dev extract-text-webpack-plugin@2.1.2
    ```
    
    
### 插件说明
#### mdCheckbox
- 1. 主文件调用：
```html
  <md-checkbox :sel-label="selLab" :sel-id="selId" @getSelVal="fn"></md-checkbox> 
```   
- 2. 参数设置： 
```javascript
// 设置默认参数
// selLab 设置标题名（可自定义）
// selLab 设置id名（可自定义）
    data() {
          return {
            selLab: '护照',
            selId: 'sels'
          }
        }
```
```javascript
    // 监听获取子组件传值
    // 其中fn 传递的是 value 值 （可自定义）
    // ["gasc", true] 第一个参数：id，第二个参数：选中状态
          fn(data) {
            console.log(data)
          }
```
- 3. 样式设置
    + .magic-checkbox+label:before 指的是复选框
    + .magic-checkbox+label:after 指的是复选框右边文字

#### mdpopup 弹出框
- 1. 主文件调用：
```html
// 以民族单列为例
 <mt-field label="民族" placeholder="请选择民族" @focus.native.capture="ShowPupMz" v-model="forms.minzu"></mt-field>
             <md-popup :inval="popupDataMz.inVal" :popup-data="popupDataMz" @popupHideMz="popupHideMz"></md-popup>
```
- 2. 参数设置： 
```javascript
// 设置默认参数
data() {
      return {
        forms: {
            minzu: '',
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
      }
    }
```
```javascript
     // 父传子
           ShowPupMz() {
             this.popupDataMz.inVal = true;
           },
     //民族 子传父
     popupHideMz(data) {
       this.popupDataMz.inVal = false;
       if(data !== '') {
         this.forms.minzu = data;
       }
    }
```
#### citySel 省市区
- 同mdpopup配置与用法
- 区别在于
```html
 <mt-field label="户籍地" placeholder="请选择户口所在地" @focus.native.capture="ShowPupHjd" v-model="forms.Hjd"></mt-field>
      <city-sel :inval="popupDataHjd.inVal" :popup-data="popupDataHjd" @popupHideHjd="popupHideHjd"></city-sel>
```
- 不需要配置 slots 数据
```javascript
popupDataMz: {
         fnName: 'popupHideMz',
         inVal: false,
         polab: '',
         potaps: ''
       },
```

### js知识点
```
叹号后面跟函数!function
和加号后面跟函数+function
都是跟(function(){})();这个函数是一个意思，都是告诉浏览器自动运行这个匿名函数的，因为!+()这些符号的运算符是最高的，所以会先运行它们后面的函数
```