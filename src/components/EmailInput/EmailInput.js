import React from 'react';
import styled from 'styled-components';

const EmailInput = ({ email, onChange }) => {
    return (<Input 
        onChange={(e) => onChange(e)} 
        type="email" 
        placeholder="Email"
        name="email" 
        value={email}
    />)
} 

export default EmailInput;


const Input = styled.input`
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