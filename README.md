# graphQL-server
Express 项目框架

1.搭建服务器端代码
1. 创建server 文件夹
$ npm init -y
2. 使用express 框架
npm install express --save 
创建 app.js
监听在 4000 端口

```
const express = require('express');

const app = express();

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
})
```

运行
node app

热更新
nodemon app