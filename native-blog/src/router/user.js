const { loginCheck } = require("../controller/user")
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method // GET POST

    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        console.log(req.body)
        const result = loginCheck(username, password)
        console.log(result)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('登录失败')

    }
}

module.exports = handleUserRouter