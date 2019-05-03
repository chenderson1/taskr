import styled from 'styled-components';

export const StyledBoard = styled.div`
    border: none;
    background-color: ${props => props.isToggled && '#88D70A'};
        border-radius: 10px;
    `;
