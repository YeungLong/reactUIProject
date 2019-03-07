import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import { loginAction } from '../action/loginAction'

import Login from "./Login"
import Main from "./Main"

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log(this.props.users)
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/main" conpoment={Main}/>
                </Switch>
                {/* { this.props.users.isAuth? <Route path='/Main' component={Main} /> : <div><div>header</div>
                <div className="main" style={{backgroundColor: "#fff"}}>
                    <div>body</div>
                    <Route path="/login" component={Login}/>
                </div>
                <div>footer</div></div>} */}
                
            </div>
        );
    }
} 

const mapStateToProps = (state) =>{
	return {users:state.loginReducer}
}

//Connect负责从外部获取组件需要的参数
Index = connect(mapStateToProps,{loginAction})(Index);


export default Index