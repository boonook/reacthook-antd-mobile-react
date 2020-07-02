### 1.无状态组件

### 2.mobx 统一状态管理器,多状态管理器

### 3.useState

### 4.createContext,useContext 组件间传值

### 5.时间处理moment
```bash
    yarn add moment
```

### 6.网络请求axios
```bash
    yarn add axios
```

### 7.路由react-router-dom 可根据实际情况做权限处理只加载对应的菜单
```bash
    yarn add react-router-dom
```

### 8.vconsole移动端调试

### 9.图片懒加载
```bash
    yarn add react-lazyload
```

### 10.移动端数据统计
```bash
    yarn add @ant-design/charts
```

### 11.对ui库组件进行二次封装,以防止更新ui库造成组件废弃的影响

### 12.robots.txt 不允许任何形式的爬虫获取该网站的任何数据信息
```bash
    User-agent: *
    Disallow:
```
### 13.webpack的别名设置以及别名的自动提示
```bash
    1.在webpack.config.js中添加 '@src':path.resolve('src'),
    2.新建jsconfig.json
```

### 14.登录权限操作
### 15.系统变量配置src/config/constant.js
```bash
    1.该文件的主要作用是对系统长脸能够进行定义，包括http协议，允许上传的文件类型，性别说明，等
```
### 16.系统变量配置src/config/index.js
```bash
   这里存放的是网络请求的地址dev开发环境,pro生产环境 
```
### 17.系统变量配置src/assets
```bash
   存放静态资源文件
```
### 18.系统变量配置src/components
```bash
   存放共调用的功能公共组件
```
### 19.系统变量配置src/pages
```bash
   存放路由对应的页面
```
### 20.系统变量配置src/route
```bash
   存放路由配置文件，以及用户的菜单权限操作
```
### 21.系统变量配置src/store
```bash
   存放的是全局的状态管理器，所有状态管理器都要放在这里进行统一管理
```
### 22.系统变量配置src/utils
```bash
   1.存放的有网络请求封装的底层http.js，他在src/api中尽心那个调用。
   2.libs,tools存放的是一些常用的公共那个方法，包括请求参数的处理等
```
### 23.系统变量配置src/index.js
```bash
   全局的入口文件，包括store的注入也在此完成
```
### 24.系统变量配置src/api
```bash
    所有的网络请求都在这里进行发起，在需要网络请求的位置进行调用，参数处理也最好着这个文件夹下对应的js中进行处理
```

# 预期
### 1.实现自动化项目管理，减少手动修改代码在scripts目录下进行";


