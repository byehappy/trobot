import styled from "styled-components";
import {Desctop, Desctop_body} from "../../styles/styles";

const colors = ['#A46CFF', '#669AFF', '#5DFF94','#FFD363','#7EFF51'];

const getColor = index => colors[index % colors.length];

export const CardContainer = styled.div`
  display: grid;
  grid: 11vw / 70% 30%;
  border-radius: 1vw;
  width: 100%;
  background: ${props => getColor(props.index)};
  color: white;
  padding: 1vw 2vw;
  text-align: left;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;

export const CardContainerExample = styled.div`
  display: grid;
  grid: 11vw / 70% 30%;
  border-radius: 1vw;
  width: 30vw;
  background: ${props => getColor(props.index)};
  color: white;
  padding: 1vw 2vw;
  text-align: left;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;

export const InfoContainer = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  width: 100%;
`

export const Title = styled.h2`
  ${Desctop};
  font-size: 1.5vw;
  margin-bottom: 10px;
  overflow: hidden;
  margin-top: 10px;
`;


export const Tags = styled.div`
    ${Desctop_body};
  margin-top: .5vw;
  overflow: clip;
`;
export const Description = styled.div`
    ${Desctop_body};
  margin-top: .5vw;
  position: inherit;
  overflow-wrap: break-word;
`;

export const Tag = styled.span`
`;
export const Duration = styled.div`
    ${Desctop_body};
  display: flex;
  gap: 1vw;
  font-size: 1vw;
`
export const Price = styled.div`

`;

export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
`
