import React from 'react';
import styled from 'styled-components';

const PasswordInput = ({ password, onChange }) => {
    return (<Input 
        onChange={(e) => onChange(e)}
        type="password" 
        placeholder="Password" 
        name="email" 
        value={password}
    />)
} 

export default PasswordInput;

const Input = styled.input`
    border-radius:4px;
    background:#ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width:250px;
    font-size:1em;
    margin-top:10px;
`;