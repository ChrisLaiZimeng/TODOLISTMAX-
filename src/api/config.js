const api = process.env.NODE_ENV === 'development' ? '/api' : ''
export const phoneLogin = api + '/login/cellphone' // 手机号登陆
export const phoneRegistered = api + '/cellphone/existence/check' // 手机号是否被注册
export const sendVerify = api + '/captcha/sent' // 发送验证码
export const verify = api + '/captcha/verify' // 验证验证码
export const loginStatus = api + '/login/status' // 登录状态
export const logout = api + '/logout' // 退出登录
export const signIn = api + '/daily_signin' // 签到
export const register = api + '/register/cellphone' // 注册修改密码
