import {userConstants} from "../_constants/actionsConstants";

const userState = {userExist: false, email: ''}

export function userReducer(state = userState, action) {
    switch (action.type) {
        case userConstants.USER_EXISTS:
            return {
                userExist: true,
                email: action.payload.email
            };
        case userConstants.USER_DOES_NOT_EXISTS:
            return {
                userExist: true,
                email: action.payload.email
            };
        default:{
            console.log('Register or Login');
            return state;

        }
    }
}