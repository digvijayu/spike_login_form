import styled from 'styled-components';

export const ValidityText = styled.div`
    color: ${ props => props.valid ? 'green' : 'red' }
    margin-top: 5px;
    font-size: 11px;
    display:list-item;
    margin-left: 20px;
`;