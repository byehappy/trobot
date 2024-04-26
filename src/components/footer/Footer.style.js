import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  border-top: black solid .2vw;
  justify-content: space-between;
  height: 5vw;
  margin-top: 3vw;
  margin-left: 10vw;
  margin-right: 10vw;
  align-items: center;
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
`
export const Buttons = styled.div`
  font-size: 1vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
`
export const SocialContainer = styled.div`
  display: flex;
  gap: 2vw;
`

export const Social = styled.a`
  
`