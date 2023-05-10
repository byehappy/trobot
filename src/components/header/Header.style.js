import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 10vw;
  margin-right: 10vw;
  justify-content: space-between;
  align-items: center;
  height: 5vw;
`
export const Logo = styled.div`
  font-family: Manrope,sans-serif;
  font-weight: 800;
  font-size: 2vw;
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 2vw;
  margin-left: 7vw;
`
export const Buttons = styled.div`
  font-size: 1vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
`

export const AuthContainer = styled.div`
  display: flex;
  gap: 2vw;
`

export const AuthLog = styled.button`
  outline: none;
  background: none;
  cursor: pointer;
  border: black solid .2vw;
  font-size: 1vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
  padding: .8vw 2.6vw;
  border-radius: 2vw;
`
export const Registration = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1vw;
  font-family: Ubuntu,sans-serif;
  font-weight: 400;
`