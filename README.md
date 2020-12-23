# 2020VUEelement

+ npm start
+ npm run emotor
+ \packages\theme-chalk\src\common\var.scss

## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## 开发指南

1. [开发环境搭建](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA)
  ```
  git clone git@github.com:ElemeFE/element.git
  !! 注意：我们使用 yarn 进行依赖版本的锁定，所以请不要使用 npm install 安装依赖。
  npm run dev
  # open http://localhost:8085
  npm run dist
  ```
2. gulp
3. 参考
+ [调整 webpack 配置最简单的方式](https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
+ [如何修改ElementUI源码](https://www.jianshu.com/p/e745787118d0)
+ [Vue CLI 4.x 配置 alias](https://www.jianshu.com/p/0824f625dfbb)
+ [Node中require第三方包规则](https://blog.csdn.net/weixin_34381666/article/details/91397399?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control)




### 开发日志

### 25/12/2020 周五
本周
+ 学习调试工具
+ 编写公共组件权限树
+ 练习three.js
下周
+ 看一看three