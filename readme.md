### 目录

├── webpack.config.js        // 构建服务和webpack配置
├── dist                     // 项目build目录
├── index.html               // 项目入口文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
|   ├── apps                 // 所有入口文件，多页面应用，独立页面
│   ├── api                   // 所有的请求配置放在这个文件夹
│   │   ├── dbFactory.js     // 请求操作方法文件
│   │   └── index.js         // 请求入口文件
|   ├── helpers              // 辅助文件
|   ├── components           // 项目中通用组件
│   ├── modules              // 所有的模块文件夹
│   └── pages                // 所有的页面文件夹，独立的哈希
│    ├── home
│         ├── index.js               
│         └── home.css    

### 数据传输 

数据用 emiiter 传输。组件逻辑向内聚合