### 论证后结论
- 使用 脚手架 工具搭建，打包后修改使用cdn形式引入文件
- 选择前框框架 mint-ui ,局部引入组件



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