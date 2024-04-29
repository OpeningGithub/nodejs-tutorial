const { userInfo } = require('os')
const db = require('../db/index')
const bcrypt = require('bcryptjs')

const sqlStr_user_existed = `select * from ev_users where username=?`
const sqlStr_user_insert = `insert into ev_users set ?`

module.exports.regUser = (req, res) => {
    const userinfo = req.body

    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, msg: '用户名和密码不能为空' })
    }

    db.query(sqlStr_user_existed, userinfo.username, (err, results) => {
        if (err) {
            return res.send({ status: 1, msg: err.message })
        }
        if (results.length > 0) {
            return res.send({ status: 1, msg: '用户名已存在' })
        }

        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        db.query(sqlStr_user_insert, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) {
                return res.send({ status: 1, msg: err.message })
            }
            if (results.affectedRows !== 1) {
                return res.send({ status: 1, msg: '注册用户失败' })
            }
            res.send({ status: 0, msg: '注册用户成功' })
        })
    })

}

module.exports.login = (req, res) => {
    res.send('请求响应函数已分离，login OK')
}