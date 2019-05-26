import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './../../store/actions';

const Home = (props) => {
    const dispatch = useDispatch();
    const { isLoggedIn, email } = useSelector((state) => ({
        isLoggedIn: state.app.isLoggedIn,
        email: state.app.email
    }))
    return (<HomeContainer>
        {isLoggedIn && 
            <>
                <Header>Hello, {email}</Header>
                <LogoutButton
                    onClick={() => dispatch(logout())}
                >Logout</LogoutButton>
            </>
        }

        {!isLoggedIn && 
            <>
            </>
        }
    </HomeContainer>)
}

const HomeContainer = styled.div`
    height: 100%;
    padding: 40px;
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
    font-weight:800;
    font-size:0.8em;

    &hover {
        background:#2CC06B;
    }
`;

const Header =  styled.div`
    font-size:1.5em;
    color:#525252;
`;


export default Home;