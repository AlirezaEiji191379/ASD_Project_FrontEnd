import {userConstants} from "../_constants/actionsConstants";

const loginState = {userExist: false, email: ''}

export function userReducer(state = loginState, action) {
    switch (action.type) {
        case userConstants.USER_EXISTS:
            return {
                userExist: true,
                email: action.payload.email
            };
        default:
            return state;
    }
}