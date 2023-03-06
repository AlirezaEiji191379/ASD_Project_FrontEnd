import {userPaths} from "../_constants/paths";

function handleResponse(response) {
    /*
    Process the response received by fetch().
    */
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // TODO: How does backend inform us about user not exit? (Matin, )
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
        body: JSON.stringify({email})
    };
    return fetch(userPaths.LOGIN_PATH, requestOptions).then(handleResponse);
}

function login(email, password) {
    //TODO: TO IMPLEMENT

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({})
    };
    return fetch(userPaths.LOGIN_PATH, requestOptions).then(handleResponse);
}

function register(email, password) {
    //TODO: TO IMPLEMENT

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({})
    };
    return fetch(userPaths.LOGIN_PATH, requestOptions).then(handleResponse);
}

export const userServices = {
    sendEmail: sendEmail,
    login: login,
    register: register
}