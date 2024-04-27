import styled from "styled-components";
import {Field, Form,ErrorMessage} from "formik";

export const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70%;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1vw;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const FormField = styled(Field)`
  background: white;
  border-radius: 1vw;
  border: 1px solid #9f9f9f;
  width: 100%;
  height: 3vw;
  padding-left: 1vw;
  margin-top: .5vw;
  font-size: 1.2vw;
`

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  margin-top: 1.6vw;
  height: 2.8vw;
  border-radius: 1vw;
  background: black;
  padding: 0 1vw;
  color: white;
  cursor: pointer;
  border: none;
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  font-weight: 700;
  font-style: normal;
  margin: 2vw auto 1vw auto;
`

export const ErrorContainer = styled.div`
  padding-left: 1vw;
  width: 100%;
  height: 1.2vw;
  .ErrorMessages {
    color: red;
    font-size: 1vw;
  }
`