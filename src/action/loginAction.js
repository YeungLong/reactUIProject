import * as types from "./actionType";

export let loginAction = (type) => {
    return dispatch => {
        if (type === 1) {
            dispatch({
                type: types.LOGIN,
                isAuth: true
            })
        } else {
            dispatch({
                type: types.LOGINOUT,
                isAuth: false
            })
        }
        
    }    
}

