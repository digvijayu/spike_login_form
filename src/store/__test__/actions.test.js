import {
    ACTION_SEND_LOGIN_REQUEST,
    ACTION_LOGIN_RESPONSE_RECEIVED,
    ACTION_LOGIN_RESPONSE_ERROR,
    ACTION_UPDATE_EMAIL,
    ACTION_UPDATE_PASSWORD,
    ACTION_LOGOUT,
    sendLoginRequest,
    loginResponseRecieved,
    loginErrorInResponseRecieved,
    updateEmail,
    updatePassword,
    logout
} from './../actions';

describe('Test actions', () => {
    test('action is created with, sendLoginRequest', () => {
        expect(sendLoginRequest()).toEqual({
            type: ACTION_SEND_LOGIN_REQUEST
        })
    })
    test('action is created with, loginResponseRecieved', () => {
        expect(loginResponseRecieved({})).toEqual({
            type: ACTION_LOGIN_RESPONSE_RECEIVED,
            response: {}
        })
    })
    test('action is created with, loginErrorInResponseRecieved', () => {
        expect(loginErrorInResponseRecieved(new Error('mock message'))).toEqual({
            type: ACTION_LOGIN_RESPONSE_ERROR,
            error: new Error('mock message')
        })
    })
    test('action is created with, updateEmail', () => {
        expect(updateEmail('mock email')).toEqual({
            type: ACTION_UPDATE_EMAIL,
            email: 'mock email'
        })
    })
    test('action is created with, updatePassword', () => {
        expect(updatePassword('mock password')).toEqual({
            type: ACTION_UPDATE_PASSWORD,
            password: 'mock password'
        })
    })
    test('action is created with, logout', () => {
        expect(logout()).toEqual({
            type: ACTION_LOGOUT
        })
    })
});