import {profilePaths} from "../_constants/paths";

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

function getUserInfo() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
    };
    return fetch(profilePaths.USER_PROFILE_GET, requestOptions).then(handleResponse);
}

function updateUserProfile(user) {
    let value = user
    value['token'] = localStorage.getItem('token');
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(value)
    };
    return fetch(profilePaths.USER_PROFILE_UPDATE, requestOptions).then(handleResponse);
}

export const profileServices = {
    getUserInfo: getUserInfo,
    updateUserProfile: updateUserProfile
}

