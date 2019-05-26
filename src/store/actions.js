export const ACTION_SEND_LOGIN_REQUEST = 'ACTION_SEND_LOGIN_REQUEST';
export const ACTION_LOGIN_RESPONSE_RECEIVED = 'ACTION_LOGIN_RESPONSE_RECEIVED';
export const ACTION_LOGIN_RESPONSE_ERROR = 'ACTION_LOGIN_RESPONSE_ERROR';
export const ACTION_UPDATE_EMAIL = 'ACTION_UPDATE_EMAIL';
export const ACTION_UPDATE_PASSWORD = 'ACTION_UPDATE_PASSWORD';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';

export const sendLoginRequest = () => ({
    type: ACTION_SEND_LOGIN_REQUEST
});

export const loginResponseRecieved = (response) => ({
    type: ACTION_LOGIN_RESPONSE_RECEIVED,
    response
});

export const loginErrorInResponseRecieved = (error) => ({
    type: ACTION_LOGIN_RESPONSE_ERROR,
    error
});

export const updateEmail = (email) => ({
    type: ACTION_UPDATE_EMAIL,
    email
})

export const updatePassword = password => ({
    type: ACTION_UPDATE_PASSWORD,
    password
})

export const logout = () => ({
    type: ACTION_LOGOUT
})