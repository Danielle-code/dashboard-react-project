import axios from 'axios'
// import querystring from 'querystring'
import {
	message
} from 'antd'

// const ip = '/check'
// const ip = 'http://10.11.12.188:9011'
const ip = 'https://www.linkedme.cc/dashboard/linkaccount'
// const ip = '/linkaccount'

// 超时时间
axios.defaults.timeout = 30000
// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 让ajax携带cookie
axios.defaults.withCredentials = true
// http请求拦截器
axios.interceptors.request.use(config => {
	config.url = ip + config.url
	return config
}, error => {
	message.error('请求失败，请稍后再试！')
	return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => {
	if (data.data.header && data.data.header.code === 900008) {
		localStorage.setItem('go_url', window.location.hash.substring(1))
		localStorage.setItem('isAuthenticated', 0)
	}
	return data.data
}, error => {
	message.error('请求失败，请稍后再试')
	return Promise.reject(error)
})

export default axios