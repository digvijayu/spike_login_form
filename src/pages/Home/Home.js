import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logout } from './../../store/actions';

const Home = (props) => {
    const dispatch = useDispatch();
    return (<HomeContainer>
        <LogoutButton
            onClick={() => dispatch(logout())}
        >Logout</LogoutButton>
    </HomeContainer>)
}

const HomeContainer = styled.div`
    height: 100%;
`;

const LogoutButton = styled.button`
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

export default Home;