const handleUserRouter = (req, res) => {
    const method = req.method;

    // 登陆接口
    if (method === 'POST' && req.path === '/api/user/login') {
        return {
            msg: '登陆接口'
        }
    }

}

module.exports = handleUserRouter;