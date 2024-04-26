import {AuthContainer, AuthLog, Buttons, Container, ContainerButtons, Logo, Registration} from "./Header.style";
import {useState} from "react";
import Modal from "../auth/Modal";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [authForm, setAuthForm] = useState(null)
    const RegForm = () => {
        setIsOpen(true);
        setAuthForm(true)
    }
    const AuthForm = () => {
        setIsOpen(true);
        setAuthForm(false)
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }
    return (
        <>
            <Container>
                    <Logo to={'/'}><span style={{color: 'blue'}}>T</span>Robot</Logo>
                <ContainerButtons>
                    <Buttons to={'/catalog'}>Каталог</Buttons>
                    <Buttons to={'/my-curses'}>Мои курсы</Buttons>
                    <Buttons to={'/reviews'}>Отзывы</Buttons>
                </ContainerButtons>
                <AuthContainer>
                    <Registration onClick={RegForm}>Регистрация</Registration>
                    <AuthLog onClick={AuthForm}>Войти</AuthLog>
                    {isOpen && <Modal authForm={authForm} open={isOpen} onClose={handleCloseModal}/>}
                </AuthContainer>
            </Container>
        </>
    )
}

export default Header;