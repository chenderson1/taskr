import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 200px;
    
    border-radius: 5px;
`;

export const StyledTaskCard = styled(StyledCard)`
    background-color: #fefffa;
    margin: 5px;
    padding: 5px;
    min-width: 100px;
    min-height: 100px;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
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

export const StyledH3 = styled.h3`
    color: #ff7300;
    margin: 8px;
`;

export const StyledSpan = styled.span`
    color: #40a700;
`;
