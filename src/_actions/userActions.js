/*
    User actions creators.
*/

import {userConstants} from "../_constants/actionsConstants";
import {userServices} from "../_services/userServices";

function checkUser(email) {
    const payload = {email: email};
    // return userEmailExist(payload);
    return (dispatch) => {
        return userServices.sendEmail(email).then(
            data => {
                dispatch(userEmailExist(payload));
            },
            error => {
                dispatch(userEmailNotExist(payload));
            }
        )
    }
}


const userEmailExist = (payload) => {
    return {type: userConstants.USER_EXISTS, payload}
};
const userEmailNotExist = (payload) => {
    return {type: userConstants.USER_DOES_NOT_EXISTS, payload}
};

function loginUser(email, password) {
    // return userLoginSuccess();
    return (dispatch) => {
        return userServices.login(email, password).then(
            data => {
                dispatch(userLoginSuccess());
            },
            error => {
                dispatch(userLoginFailed());
            }
        )
    }
}

const userLoginSuccess = (payload) => {
    return {type: userConstants.LOGIN_SUCCESS, payload: payload}
}
const userLoginFailed = (payload) => {
    return {type: userConstants.LOGIN_FAILED, payload: payload}
}

function registerUser(email, password) {
    // return userRegisterSuccess();
    return (dispatch) => {
        return userServices.register(email, password).then(
            data => {
                dispatch(userRegisterSuccess());
            },
            error => {
                dispatch(userRegisterFailed(error));
            }
        )
    }
}

const userRegisterSuccess = (payload) => {
    return {type: userConstants.REGISTER_SUCCESS, payload: payload}
}
const userRegisterFailed = (payload) => {
    return {type: userConstants.REGISTER_FAILED, payload: payload}
}

export const userActions = {
    checkUser,
    loginUser,
    registerUser
};