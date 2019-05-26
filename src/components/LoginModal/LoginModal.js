import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {loginThunk} from './../../store/thunk';
import {updateEmail, updatePassword} from './../../store/actions';
import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from './../PasswordInput';
import {
    isValidEmail,
    ruleIncreasingStraight, 
    ruleShouldNotContainLetters, 
    ruleContainNonOverlappingPairs, 
    validLength, 
    onlyLowerCaseChars
} from './../../utils';

const LoginModal = (props) => {
    const { isLoggedIn, email, password} = useSelector(state => state.app)

    const dispatch = useDispatch();
    if(isLoggedIn) {
        return(<></>);
    }

    const isFormValid = isValidEmail(email) &&
        ruleIncreasingStraight(password) &&
        ruleShouldNotContainLetters(password) &&
        ruleContainNonOverlappingPairs(password) &&
        validLength(password) &&
        onlyLowerCaseChars(password);

    return (<>
        <Modal/>
        <LoginForm>
            <Title>Login</Title>
            <EmailInput 
                email={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
            />
            <PasswordInput 
                password={password}
                onChange={(e) => dispatch(updatePassword(e.target.value))}
            />
            <SubmitButton 
                onClick={() => loginThunk()(dispatch)} 
                disabled={!isFormValid}
            >Sign In</SubmitButton>
        </LoginForm>
    </>);
}

export default LoginModal;

const Modal = styled.div`
    position: fixed;
    background-color: #aaa;
    opacity: 0.8;
    width: 100%;
    height: 100%;
`;

const LoginForm = styled.div`
    position: fixed;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:white;
    border-radius:6px;
    padding:20px;
    border: #2980b9 4px solid;
`;

const Title =  styled.div`
    font-size:1.5em;
    color:#525252;
`;

const SubmitButton = styled.button`
    background:#2ecc71;
    width:125px;
    padding-top:5px;
    padding-bottom:5px;
    color:white;
    border-radius:4px;
    border: #27ae60 1px solid;

    margin-top:20px;
    margin-bottom:20px;
    float:left;
    margin-left:16px;
    font-weight:800;
    font-size:0.8em;

    &:hover {
        background:#2CC06B;
    }

    &:disabled {
        opacity: 0.5;
    }
`;