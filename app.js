const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
//使用中间件
app.use(cors());
// 连接到 mlab 数据库
// 替换自己的用户名和密码
mongoose.connect("mongodb://test:test123@ds131914.mlab.com:31914/graphql",
 { useNewUrlParser: true });
 //连接成功输出语句
mongoose.connection.once('open', () => {
  console.log('connected to database');
})


app.use('/graphql', graphqlHTTP({
  schema,
  //使用工具
  graphiql: true,
}))

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
})