import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {loginThunk} from './../../store/thunk';
import {updateEmail, updatePassword} from './../../store/actions';

const LoginModal = (props) => {
    return (<>
    <Modal></Modal>
    <LoginForm>
        <Title>Login</Title>
        <EmailInput 
            onChange={(e) => props.updateEmail(e.target.value)}
            type="email" 
            placeholder="Email" 
            name="email" 
            value={props.email}
        />
        <PasswordInput 
            onChange={(e) => props.updatePassword(e.target.value)}
            type="password" 
            placeholder="Password" 
            name="email" 
            value={props.password}
        />
        <SubmitButton 
            onClick={() => loginThunk()(props.dispatch)} 
        >Sign In</SubmitButton>
    </LoginForm>
    </>);
}
const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    email: state.email,
    password: state.password
});
const mapActionsToProps = dispatch => ({
    dispatch,
    updateEmail: email => dispatch(updateEmail(email)),
    updatePassword: email => dispatch(updatePassword(email)),
});
export default connect(mapStateToProps, mapActionsToProps)(LoginModal);

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

const EmailInput = styled.input`
    background:#ecf0f1;
    border: #ccc 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width:250px;
    color:#AAAAAA;
    margin-top:10px;
    font-size:1em;
    border-radius:4px;
`;

const PasswordInput = styled.input`
    border-radius:4px;
    background:#ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width:250px;
    font-size:1em;
    margin-top:10px;
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

    &hover {
        background:#2CC06B;
    }
`;