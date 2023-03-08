const serverIP = 'http://188.121.121.161:8000/api/'

function makeIP(path){
    return serverIP + path;
}
export const profilePaths ={
    USER_PROFILE_GET : makeIP('/profile'),
    USER_PROFILE_UPDATE: makeIP('/profile')
}
export const userPaths = {
    VALIDATE_TOKEN: makeIP('authentication/validate-token'),
    CHECK_EMAIL_PATH: makeIP('authentication/check-email'),
    LOGIN_PATH : makeIP('authentication/sign-in'),
    REGISTER_PATH: makeIP('authentication/sign-up')
}