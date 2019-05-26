import React from 'react';
import styled from 'styled-components';
import {ValidityText} from './../../utils/styles';
import {isValidEmail} from './../../utils';

const EmailInput = ({ email, onChange }) => {
    const validEmail = isValidEmail(email);
    return (<>
        <Input 
        onChange={(e) => onChange(e)} 
        type="text" 
        placeholder="Email"
        name="email" 
        value={email}
    />
    <ValidityText valid={validEmail}>
        { validEmail ? 'Email is valid': 'Email should be valid' }
    </ValidityText>
    </>)
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