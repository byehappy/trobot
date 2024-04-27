import {AuthContainer, AuthLog, Buttons, Container, ContainerButtons, Logo, Registration} from "./Header.style";


const Header = () => {
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
                    <Registration to={'/auth/signup'}>Регистрация</Registration>
                    <AuthLog to={'/auth/signin'}>Войти</AuthLog>
                </AuthContainer>
            </Container>
        </>
    )
}

export default Header;