/*
    User actions creators.
*/

import {userConstants} from "../_constants/actionsConstants";
import {userServices} from "../_services/userServices";

function checkUser (email){
    const payload = {email: email};
    // return userEmailExist(payload);
    return (dispatch) =>{
        return userServices.sendEmail(email).then(
            data => {
                dispatch(userEmailExist(payload));
            },
            error => {
                dispatch(userEmailNotExist(error));
            }
        )
    }
}


const userEmailExist = (payload) => {return {type: userConstants.USER_EXISTS, payload}};
const userEmailNotExist = (payload) => {return {type: userConstants.USER_DOES_NOT_EXISTS, payload}};

export const userActions = {
    checkUser,
};