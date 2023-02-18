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

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };
    return fetch(userPaths.LOGIN_PATH, requestOptions).then(handleResponse);
}


export const userServices = {
    login: login
}