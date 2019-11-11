import * as types from "../action/actionType";
const initState = {
    isAuth: false,
    user: "Yeung",
    age: 20
};

let loginReducer = (state = initState, action) => {
    console.log(state, action)
    switch(action.type) {
        case types.LOGIN: 
            return {...state, isAuth: true} 
        case types.LOGINOUT: 
            return {...state, isAuth: false}
        case types.USER_DATA: 
            return {...state, user:action.payload.user, age:action.payload.age}    
        default:
            return state        
    }
}

export default loginReducer
