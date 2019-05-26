import React from 'react';
import styled from 'styled-components';
import {ValidityText} from './../../utils/styles';
import {
    ruleIncreasingStraight, 
    ruleShouldNotContainLetters, 
    ruleContainNonOverlappingPairs, 
    validLength, 
    onlyLowerCaseChars
} from './../../utils';

const PasswordInput = ({ password, onChange }) => {
    return (<>
        <Input 
            onChange={(e) => onChange(e)}
            type="password" 
            placeholder="Password" 
            name="email" 
            value={password}
        />
        <ValidityText valid={ruleIncreasingStraight(password)}>
            Passwords must include one increasing straight of at least three letters, like abc , cde , fgh , and so on, up to xyz . They cannot skip letters; acd doesn't count.
        </ValidityText>
        <ValidityText valid={ruleShouldNotContainLetters(password)}>
            Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters and are therefore confusing.
        </ValidityText>
        <ValidityText valid={ruleContainNonOverlappingPairs(password)}>
            Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
        </ValidityText>
        <ValidityText valid={validLength(password)}>
            Passwords cannot be longer than 32 characters.
        </ValidityText>
        <ValidityText valid={onlyLowerCaseChars(password)}>
            Passwords can only contain lower case alphabetic characters.
        </ValidityText>
    </>)
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