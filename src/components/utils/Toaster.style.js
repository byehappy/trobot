import styled from "styled-components";
import {Desctop_link} from "../../styles/styles";
import ExclamationIconSVG from "../Images/exclamation.svg";
import CloseIconSVG from "../Images/close.svg";

export const ToasterContainer = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
export const ToasterItem = styled.div`
`

export const ErrorToast = styled.div`
    display: flex;
    align-items: center;
    width: 30vw;
    background: red;
    color: white;
    padding: 10px;
    margin: 5px;
    border-radius: 1em;
`
export const ErrorIcon = styled.div`
`

export const ErrorMessage = styled.div`
    flex-grow: 1;
    text-align: center;
    ${Desctop_link};
    color: white;
`

export const CloseButton = styled.button`
    margin-left: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
`
export const Icon = styled.img`
    width: 24px; /* Ширина иконки */
    height: 24px; /* Высота иконки */
    fill: white; /* Цвет иконки */
    margin-right: 0.5em; /* Отступ справа */
    cursor: pointer;
`

export const CloseIcon = styled(Icon).attrs({
    src: CloseIconSVG
})`
    width: 3vw; /* Изменяем размер иконки "close" */
    height: 5vh;
`

export const ExclamationIcon = styled(Icon).attrs({
    src: ExclamationIconSVG
})`
    width: 4vw; /* Изменяем размер иконки "exclamation" */
    height: 5vh;
`