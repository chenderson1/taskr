import styled from 'styled-components'

export const Base = styled.div`
    min-height: 700px;
    width: 230px;
`;

export const StyledBase = styled(Base)`
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 10px;
    background-color: #40a700;
`;