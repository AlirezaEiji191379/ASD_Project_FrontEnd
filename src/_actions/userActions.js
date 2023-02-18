/*
    User actions creators.
*/

import {userConstants} from "../_constants/actionsConstants";
import {userServices} from "../_services/userServices";

function loginUser (email, password){
    return (dispatch) =>{
        dispatch(loginUserRequest());
        return userServices.login(email, password).then(
            data => {
                dispatch(loginUserSuccess(data));
            },
            error => {
                dispatch(loginUserError(error));
            }
        )
    }
}


const loginUserRequest = (payload) => {return {type: userConstants.LOGIN_USER_REQUEST, payload}};
const loginUserSuccess = (payload) => {return {type: userConstants.LOGIN_USER_SUCCESS, payload}};
const loginUserError = (payload) => {return {type: userConstants.LOGIN_USER_ERROR, payload}};