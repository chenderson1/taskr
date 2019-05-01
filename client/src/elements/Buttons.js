import styled from 'styled-components'

export const StyledButton = styled.button`
    min-width: 80px;
    border-radius: 15px;
`;

export const StyledLoginButton = styled(StyledButton)`
    background-color: #fea42a;
    margin: 5px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    margin-top: 10px;
    height: 30px;
`;

export const StyledBoardButton = styled(StyledButton)`
    background-color: #fea42a;
    margin: 5px;
    margin-top: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
    height: 20px
`;