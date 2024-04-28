import {
    AuthContainer,
    AuthLog,
    Buttons,
    Container,
    ContainerButtons,
    ExitButton,
    Logo,
    Registration
} from "./Header.style";
import { useSelector, useDispatch } from "react-redux";
import {resetAuthState} from "../../toolkitRedux/toolkitSlice";

const Header = () => {
    const {auth,login} = useSelector(state => state.toolkit);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("accessToken")
        dispatch(resetAuthState());
    };

    return (
        <>
            <Container>
                <Logo to={'/'}><span style={{ color: 'blue' }}>T</span>Robot</Logo>
                <ContainerButtons>
                    <Buttons to={'/catalog'}>Каталог</Buttons>
                    <Buttons to={'/my-curses'}>Мои курсы</Buttons>
                    <Buttons to={'/reviews'}>Отзывы</Buttons>
                </ContainerButtons>
                <AuthContainer>
                    {auth ? <>
                        Привет, {login}! <ExitButton onClick={handleLogout}>Выйти</ExitButton>
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
