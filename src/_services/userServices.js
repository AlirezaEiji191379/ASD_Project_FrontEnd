import {userPaths} from "../_constants/paths";

function handleResponse(response) {
    /*
    Process the response received by fetch().
    */
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

function sendEmail(email) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'email': email})
    };
    return fetch(userPaths.CHECK_EMAIL_PATH, requestOptions).then(handleResponse);
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'email': email, 'password': password})
    };
    return fetch(userPaths.LOGIN_PATH, requestOptions).then(handleResponse);
}

function register(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'email': email, 'password': password})
    };
    return fetch(userPaths.REGISTER_PATH, requestOptions).then(handleResponse);
}

function validateToken(token) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'token': token})
    };
    console.log(userPaths.VALIDATE_TOKEN);
    return fetch(userPaths.VALIDATE_TOKEN, requestOptions).then(handleResponse);
}

export const userServices = {
    sendEmail: sendEmail,
    login: login,
    register: register,
    validateToken: validateToken
}