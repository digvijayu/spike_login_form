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
    password: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_SEND_LOGIN_REQUEST: 
            return state;
        case ACTION_LOGIN_RESPONSE_RECEIVED: 
            return {
                ...state,
                isLoggedIn: true
            };    
        case ACTION_LOGIN_RESPONSE_ERROR: 
            return state;    
        case ACTION_UPDATE_EMAIL: 
            return {
                ...state,
                email: action.email
            }    
        case ACTION_UPDATE_PASSWORD: 
            return {
                ...state,
                email: action.password
            }   
        case ACTION_LOGOUT: 
            return {
                isLoggedIn: false,
                email: '',
                password: ''
            }        
        default: 
            return state;    
    }    
}