import {
    sendLoginRequest,
    loginResponseRecieved,
    loginErrorInResponseRecieved
} from './actions';

export const loginThunk = () => dispatch => {
    console.log('here');
    dispatch(sendLoginRequest());
    loginRequest()
        .then(res => dispatch(loginResponseRecieved(res)))
        .catch(err => dispatch(loginErrorInResponseRecieved(err)));
};

const loginRequest = () =>
    (new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomResponse = Math.random() > 0.5;
            console.log('random response is: ', randomResponse);
            randomResponse ? resolve({}) : reject(new Error('Login failed'))    
        }, 500);
    }))