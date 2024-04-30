import {
    AccountLink,
    AuthContainer,
    AuthLog,
    Buttons,
    Container,
    ContainerButtons,
    ExitButton,
    Logo,
    Registration
} from "./Header.style";
import {useSelector} from "react-redux";
import {useAuth} from "../../hooks/useAuth";

const Header = () => {
    const {login,id} = useSelector(state => state.toolkit);
    const {logout, authed} = useAuth();

    return (
        <>
            <Container>
                <Logo to={'/'}><span style={{color: 'blue'}}>T</span>Robot</Logo>
                <ContainerButtons>
                    <Buttons to={'/catalog'}>Каталог</Buttons>
                    {authed && <Buttons to={'/my-curses'}>Мои курсы</Buttons>}
                    <Buttons to={'/reviews'}>Отзывы</Buttons>
                </ContainerButtons>
                <AuthContainer>
                    {authed ? <>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start"
                        }}>Привет, {login}! <ExitButton onClick={logout}>Выйти</ExitButton></div>
                        <AccountLink to={`/my-account/${id}`}>Личный кабинет</AccountLink>
                    </> : <>
                        <Registration to={'/auth/signup'}>Регистрация</Registration>
                        <AuthLog to={'/auth/signin'}>Войти</AuthLog>
                    </>
                    }
                </AuthContainer>
            </Container>
        </>
    )
}

export default Header;
