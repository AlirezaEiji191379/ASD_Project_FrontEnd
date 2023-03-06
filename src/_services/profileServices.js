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

function getUserInfo(email) {
    // const requestOptions = {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({email})
    // };
    // return fetch(profilePaths.USER_PROFILE_GET, requestOptions).then(handleResponse);
    return {
        username: 'rama1',
        email: 'exmaple@rama.com',
        publicUsername: 'RAMA1',
        firstName: 'Matin',
        lastName: 'Daghyani',
    };
}

function updateUserProfile(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: user})
    };
    return fetch(profilePaths.USER_PROFILE_UPDATE, requestOptions).then(handleResponse);
}

export const profileServices = {
    getUserInfo: getUserInfo,
    updateUserProfile: updateUserProfile
}

