import react from "react";
import { BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom'

// export const routes = {
//     path:'/',
//     getComponent(nextState, callback){
//      	require.ensure([], require=>{
//       		callback(null,require('../containers/Main').default);
//      	},'Main');
//     },
//     indexRoute:{
//      	getComponent(nextState, callback){
//       		require.ensure([], require=>{
//        			callback(null,require('../containers/Index').default);
//       		},'Index');
//      	}
//     },
//     // childRoutes:[{
//     // }]
// };
import Main from "../containers/Main";
import Home from "../containers/Index";

export const routes = [{
    component: Main,
    routes: [{
        path: "/",
        exact: true,
        component: Home
    }]
}]

