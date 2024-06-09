import {Container, Logo, Buttons, ContainerButtons, SocialContainer, Social} from './Footer.style'
import instagram from '../Images/Instagram.svg'
import facebook from '../Images/Facebook.svg'
import twitter from '../Images/Twitter.svg'
import {useAuth} from "../../hooks/useAuth";
import {useSelector} from "react-redux";
const Footer = () =>{
    const {authed} = useAuth()
    const {role} = useSelector(state => state.toolkit);

    return(
        <>
            <Container>
                <Logo to={'/'}><span style={{color: 'blue'}}>T</span>Robot</Logo>
                <ContainerButtons>
                    <Buttons to={"/about"}>О нас</Buttons>
                    {(authed && role === "USER") && <Buttons to={'/teach-app'}>Стать преподавателем</Buttons>}
                    <Buttons to={"/catalog"}>Курсы</Buttons>
                </ContainerButtons>
                <SocialContainer>
                    <Social href='https://instagram.com/'><img src={instagram}/></Social>
                    <Social href='https://facebook.com/'><img src={facebook}/></Social>
                    <Social href='https://twitter.com/'><img src={twitter}/></Social>
                </SocialContainer>
            </Container>
        </>
    )
}

export default Footer;