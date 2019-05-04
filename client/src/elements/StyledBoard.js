import styled from 'styled-components';

export const StyledBoard = styled.div`
    border: 1px solid #88D70A;
    background-color: ${props => props.isToggled && '#88D70A'};
        border-radius: 10px;
        margin: 10px;
        box-shadow: black 5px 5px 10px;
    `;
