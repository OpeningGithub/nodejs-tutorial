/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-13 08:18:42
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-13 11:44:44
 * @FilePath: \Git\node-js-demo\http-library-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict'

const http = require('http')

const myServer = http.createServer()

myServer.on('request', (req, res) => {
//   console.log('request received')
    const url = req.url
    const method = req.method

    const responseString = `Your request url is ${url}, and request method is ${method}`
    console.log(responseString)

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    const responseChineseString = `你的请求头信息是 ${url}, and 请求方式是 ${method}`
    res.end(responseChineseString)
})

myServer.listen(8080, () => {
  console.log('server running on http://localhost:8080')
})
