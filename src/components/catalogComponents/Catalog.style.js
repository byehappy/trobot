import styled from "styled-components";
import {Desctop_subtitle} from "../../styles/styles";

export const Container = styled.div`
  display: flex;
  max-width: 90%;
  margin-left: 5vw;
  margin-top: 5vw;
  justify-content:space-around;
  overflow-x: auto;
`
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  row-gap: 2vw;
  column-gap: 3vw;   
  max-width: 94%;
  margin: 5vw 0.5% 0 0.5%;
`
export const Button = styled.button`
  ${Desctop_subtitle};
  border: none;
  background: none;
  font-size: 1.3vw;
  cursor: pointer;
  &:hover{
   filter: opacity(65%);
  }
`