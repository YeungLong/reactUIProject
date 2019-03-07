import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch,Link} from 'react-router-dom'
import { loginAction } from '../action/loginAction'

import Main from "./Main"
class Login extends React.Component {

	handleLogin = () => {
		dispatch({
			type: 1
		})
		
	};

	render() {
		console.log(this.props)
		return (
			<div>
				{ this.props.users.isAuth? <Redirect to='/Main' /> : null}
				<h2>你没有权限，需要登录才能看</h2>
				<button onClick={this.props.loginAction.bind(this, 1)}>登录</button>
			</div>
		)
	}
}
const mapStateToProps = (state) =>{
	return {users:state.loginReducer}
}

//Connect负责从外部获取组件需要的参数
Login = connect(mapStateToProps,{loginAction})(Login);

export default Login;