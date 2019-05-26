import React from 'react';
import styled from 'styled-components';

const ErrorPopup = ({message}) => {
    return (<PopupDiv>{message}</PopupDiv>)
}

export default ErrorPopup;

const PopupDiv = styled.div`
    position: fixed;
    margin: 10px 50%;
    padding: 12px 40px;
    border: 2px solid #721c24;
    border-radius: .25rem;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #721c24;
    z-index: 1;
    transform: translate(-50%, 0);
    width: 400px;
    text-align: center;
`;