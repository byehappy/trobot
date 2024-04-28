import styled from "styled-components";
import {Link, NavLink} from 'react-router-dom';
import {baseMargin} from "../../styles/styles";

export const Container = styled.div`
  display: flex;
  ${baseMargin};
  justify-content: space-between;
  align-items: center;
  height: 5vw;
`
export const Logo = styled(NavLink)`
  font-family: Manrope,sans-serif;
  font-weight: 800;
  font-size: 2vw;
  text-decoration: none;
  color: black;
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 2vw;
  margin-left: 7vw;
`
export const Buttons = styled(NavLink)`
  font-size: 1vw;
  font-family: Ubuntu, sans-serif;
  font-weight: 400;
  text-decoration: none;

  &.active {
    color: #7380ff;
  }
`

export const AuthContainer = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
`

export const AuthLog = styled(Link)`
  outline: none;
  background: none;
  cursor: pointer;
  border: black solid .2vw;
  font-size: 1vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
  padding: .8vw 2.6vw;
  border-radius: 2vw;
  text-decoration: none;
`

export const ExitButton = styled.button`
  outline: none;
  background: none;
  cursor: pointer;
  border: black solid .2vw;
  font-size: 1vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
  padding: .8vw 2.6vw;
  border-radius: 2vw;
  text-decoration: none;
`
export const Registration = styled(Link)`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
  
  text-decoration: none;
`