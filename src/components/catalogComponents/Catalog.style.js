import styled from "styled-components";
import {Desctop_subtitle} from "../../styles/styles";

export const Container = styled.div`
  display: flex;
  width: 80vw;
  margin-left: 10vw;
  margin-top: 5vw;
  justify-content:space-around;
`
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  row-gap: 2vw;
  column-gap: 5vw;
  width: 80vw;
  max-width: 80vw;
  margin-left: 14vw;
  margin-right: 10vw;
  margin-top: 5vw;
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