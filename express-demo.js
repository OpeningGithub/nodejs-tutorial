/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-16 20:49:30
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-16 21:00:00
 * @FilePath: \node-js-demo\express-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入 express
const express = require('express');

// 创建 Web 服务器
const app = express();

// 启动 Web 服务器 监听端口
app.listen(80, () => {
    console.log('服务器启动成功');
});