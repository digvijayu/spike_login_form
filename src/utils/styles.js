import styled from 'styled-components';

export const ValidityText = styled.div`
    color: ${ props => props.valid ? '#009900' : '#FF0000' }
    margin-top: 5px;
    font-size: 11px;
    display:list-item;
    margin-left: 20px;
`;