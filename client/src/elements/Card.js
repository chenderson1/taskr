import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 200px;
    
    border-radius: 5px;
`;

export const StyledTaskCard = styled(StyledCard)`
    background-color: lightslategray;
    margin: 5px;
`;

export const StyledLoginCard = styled(StyledCard)`
    font-family: 'Ubuntu', sans-serif;
    border-radius: 15px;
    margin-top: auto;
    margin-bottom: auto;
    
    padding: 10px;
    color: black;
    font-size: 22px;
    font-weight: bold;
    background-color: #88d70a;
    
`;
