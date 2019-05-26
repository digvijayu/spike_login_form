import {
    ACTION_SEND_LOGIN_REQUEST,
    ACTION_LOGIN_RESPONSE_RECEIVED,
    ACTION_LOGIN_RESPONSE_ERROR,
    ACTION_LOGOUT,
    ACTION_UPDATE_EMAIL,
    ACTION_UPDATE_PASSWORD
} from './actions';

export const initialState = {
    isLoggedIn: false,
    email: '',
    password: '',
    loginErrorMessage: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_SEND_LOGIN_REQUEST: 
            return {
                ...state,
                loginErrorMessage : ''
            };
        case ACTION_LOGIN_RESPONSE_RECEIVED: 
            return {
                ...state,
                isLoggedIn: true
            };    
        case ACTION_LOGIN_RESPONSE_ERROR: 
            return {
                ...state,
                loginErrorMessage : `
                Mock Error: This error just shows how failed 
                authentication requests are displayed. The response 
                is random, please try logging in one again.
                `
            };    
        case ACTION_UPDATE_EMAIL: 
            return {
                ...state,
                email: action.email,
                loginErrorMessage : ''
            }    
        case ACTION_UPDATE_PASSWORD: 
            return {
                ...state,
                password: action.password,
                loginErrorMessage : ''
            }   
        case ACTION_LOGOUT: 
            return {
                isLoggedIn: false,
                email: '',
                password: '',
                loginErrorMessage : ''
            }        
        default: 
            return state;    
    }    
}