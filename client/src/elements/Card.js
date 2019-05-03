import styled from "styled-components";

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
  font-family: "Ubuntu", sans-serif;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: auto;
  padding: 10px;
  color: black;
  font-size: 22px;
  font-weight: bold;
  background-color: #88d70a;
`;

export const StyledParentCard = styled.div`
  display: grid;
  background: #339dd4;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  /* border1top: darkslategray 2px solid; */
  padding-top: 20px;
`;

export const StyledTaskTile = styled.div``;

export const StyledInfo = styled.div`
  text-align: left;
  padding: 10px;
`;
export const StyledTaskrInfo = styled(StyledInfo)`
  background-color: #fbfbfb;
  border-radius: 10px;
  box-shadow: 1px 1px 20px #257096;
  padding: 30px;
`;

export const StyledImg = styled.img`
  height: 200px;
  margin: auto;
  border-radius: 9px;
  box-shadow: 0px 0px 10px #257096;
`;

export const StyledH3 = styled.h3`
  color: #ff7300;
  margin: 8px;
  font-size: 2rem;
  color: #fea42a;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #40a700;
  text-transform: uppercase;
`;

export const StyledSpan = styled.span`
  color: #40a700;
`;
export const StyledSmall = styled.span`
  font-size: 1rem;
  display: block;
  text-align: right;
  margin-top: 5px;
`;
export const StyledUl = styled.span`
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
