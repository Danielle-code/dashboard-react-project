import React, { Component } from 'react'  
import { message, Input } from 'antd'

import { withRouter } from 'react-router-dom'  //路由
import axios from '../../http'       //axios
import './login.scss'

class Login extends Component{
	constructor(){
		super()
		 this.state = {
		      email: '',
		      pwd: ''
		 }	
		}
	},
	login = () => {
		const params = {
			email:this.state.email,
			password:this.state.pwd,
			go_url:'/'
		}
		axios.post('/cms/login', params).then(res => {
	      if (res.header.code === 200) {
			const go_url = localStorage.getItem('go_url') || '/account'
	        this.props.history.push(go_url)
	        document.cookie = `account_token=${res.body.account_token}`
	        localStorage.setItem('email', this.state.email)
	        localStorage.setItem('go_url', '')
	        localStorage.setItem('isAuthenticated', 1)
	      } else {
	        message.error(res.header.msg)
	      }
	  	})
	},
	render(){
		return(
		      <div className="login-wrapper">
		        <div className="logo-wrapper">
		          <img src="https://www.linkedme.cc/dashboard/img/sign-logo.png" alt=""/>
		        </div>
		        <div className="input-wrapper">
		          <Input placeholder="账号" onChange={e => this.setState({email: e.target.value})} />
		          <Input type="password" placeholder="密码" onChange={e => this.setState({pwd: e.target.value})} onPressEnter={this.login} />
		        </div>
		        <div className="btn-wrapper">
		          <input className="btn" type="button" value="登 录" onClick={this.login} />
		        </div>
		        <div className="info-wrapper">
		          <p>北京微方程科技有限公司 ©2015 京ICP备15003545号</p>
		          <p>LinkedME All Rights Reserved</p>
		        </div>
		      </div>
			)
	}
}

export default withRouter(Login)