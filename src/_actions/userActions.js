/*
    User actions creators.
*/

import {userConstants} from "../_constants/actionsConstants";
import {userServices} from "../_services/userServices";

function checkUser (email){
    return (dispatch) =>{
        dispatch(userEmailRequest());
        return userServices.sendEmail(email).then(
            data => {
                dispatch(userEmailExist(data));
            },
            error => {
                dispatch(userEmailNotExist(error));
            }
        )
    }
}


const userEmailRequest = (payload) => {return {type: userConstants.LOGIN_USER_REQUEST, payload}};
const userEmailExist = (payload) => {return {type: userConstants.LOGIN_USER_SUCCESS, payload}};
const userEmailNotExist = (payload) => {return {type: userConstants.LOGIN_USER_ERROR, payload}};

export const userActions = {
    checkUser,
};