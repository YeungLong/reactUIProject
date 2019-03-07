
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAction } from '../action/loginAction'

import login from "./Login"

function ClassOne(){
	return <p>初三(1)班：有90个人</p>
}
function ClassTwo(){
	return <p>初三(2)班：有50个人</p>
}
function ClassThree(){
	return <p>初三(3)班：有30个人</p>
}
class Main extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		const match = this.props.match
		const rediectToLogin = <Redirect to='/'></Redirect>
		const app = (
				<div>
					<h2>我的名字是{this.props.users.user},年龄{this.props.users.age}岁</h2>
					<h1>初三年段各个班有多少人</h1>
					{this.props.users.isAuth? <button onClick={this.props.loginAction.bind(this, 0)}>注销</button>:null}
					<ul>
						<li>
							<Link to ={`${match.url}/`} >初三(1)班</Link>
						</li>
						<li>
							<Link to ={`${match.url}/classTwo`}>初三(2)班</Link>
						</li>
						<li>
							<Link to ={`${match.url}/classThree`}>初三(3)班</Link>
						</li>
					</ul>
					<Route path={`${match.url}/`} exact component={ClassOne} ></Route>
					<Route path={`${match.url}/classTwo`} component={ClassTwo}></Route>
					<Route path={`${match.url}/classThree`}  component={ClassThree}></Route>
				</div>
			)
		return this.props.users.isAuth ? app : rediectToLogin
	}
}
const mapStateToProps = (state) =>{
	return {users:state.loginReducer}
}

Main = connect(mapStateToProps,{loginAction})(Main);

export default Main;
