import {
    ButtonIntro,
    ButtonSubs,
    ContainerIntro,
    FeatureContainer,
    FeatureGrid,
    FeatureItem,
    FeatureRight,
    MainContainer,
    Partners,
    PictureIntro,
    ReviewsBase,
    ReviewsContainer,
    ReviewsHeader,
    ReviewsItem, SubsButtonOne, SubsButtonTwo,
    SubsContainer,
    SubsContBase,
    SubsContOne, SubsContTwo,
    SubsHeader,
    TextIntro,
    UserList
} from "./MainComponent.style";
import intro from '../Images/Intro.svg'
import ya from '../Images/Yandex.svg'
import Super from '../Images/Super.svg'
import xiaomi from '../Images/Xiaomi.svg'
import Samsung from '../Images/Samsung.svg'
import Feature from '../Images/Feature2.svg'
import play from '../Images/play.svg'
import schedule from '../Images/schedule.svg'
import work from '../Images/work.svg'
import teacher from '../Images/teacher.svg'
import user1 from '../Images/user1.svg'
import user2 from '../Images/user2.svg'
import stars from '../Images/5 star.svg'
const MainComponent = () => {

    return (
        <MainContainer>
            <ContainerIntro>
                <TextIntro>
                    <div className='ones'>ТВОЙ ПУТЬ В КИБЕРПАНК БУДУЩЕГО НАЧИНАЕТСЯ ЗДЕСЬ С <span
                        style={{color: 'blue'}}>TROBOT</span></div>
                    <div className='twos'>Получи востребованную профессию уже сейчас! Курсы на любой вкус. Для
                        школьников, родителей, и всех, кто хочет познакомиться с основами робототехники
                    </div>
                    <ButtonIntro>Записаться на курс</ButtonIntro>
                </TextIntro>
                <PictureIntro src={intro}/>
            </ContainerIntro>
            <Partners>
                <div className='text'>Наши партнеры</div>
                <img src={ya}/>
                <img src={Super}/>
                <img src={xiaomi}/>
                <img src={Samsung}/>
            </Partners>
            <FeatureContainer>
                <img className='picture' src={Feature}/>
                <FeatureRight>
                    <span>ПОЧЕМУ СТУДЕНТЫ ВЫБИРАЮТ НАШИ КУРСЫ РОБОТОТЕХНИКИ</span>
                    <FeatureGrid>
                        <FeatureItem><img src={play}/><h1>Онлайн обучение</h1>Проходите курсы в удобном формате онлайн
                            обучения. У нас вы найдете современные методики обучения, которые помогут вам освоить все
                            нюансы профессии.</FeatureItem>
                        <FeatureItem><img src={schedule}/><h1>Гибкое расписание</h1>Наши курсы позволят вам выбрать
                            удобное для вас время и темп обучения. Вы можете проходить курсы в любое время суток, что
                            позволит вам не прерывать свою работу или учебу.</FeatureItem>
                        <FeatureItem><img src={teacher}/><h1>Помощь куратора</h1>Наши кураторы всегда готовы помочь Вам
                            в процессе обучения. Они будут отвечать на ваши вопросы и помогать преодолевать трудности,
                            которые возникают в процессе обучения.</FeatureItem>
                        <FeatureItem><img src={work}/><h1>Трудоустройство</h1>Наша программа обучения позволит Вам
                            получить хорошую квалификацию, которая будит востребована на рынке. Мы поможем вам найти
                            хорошую работу в этой области.</FeatureItem>
                    </FeatureGrid>
                </FeatureRight>
            </FeatureContainer>
            <ReviewsBase>
                <ReviewsHeader>ПОЧЕМУ СТУДЕНТЫ ВЫБИРАЮТ НАШИ КУРСЫ РОБОТОТЕХНИКИ</ReviewsHeader>
                <ReviewsContainer>
                    <ReviewsItem><h1>"Отличные курсы для тех, кто
                        хочет стать профессионалом
                        в робототехнике!"</h1><h2>Если вы хотите стать экспертом в области робототехники, то этот курс -
                        отличный выбор для вас. Он предоставляет самые современные и эффективные методы обучения,
                        которые помогут вам освоить все необходимые навыки и стать профессионалом в этой области</h2>
                        <UserList><img src={user2}/><div className='text'>Илья Жуков<br/>
                            <span>Россия, Владимир</span><br/><img src={stars}/></div></UserList>
                    </ReviewsItem>
                    <ReviewsItem><h1>"Благодаря помощи кураторов, я
                        без труда справился со сложными заданиями!"</h1><h2>Если у вас возникли вопросы или трудности в
                        ходе обучения,
                        не стоит так беспокоиться. Кураторы этого курса всегда готовы помочь вам и ответить на все ваши
                        вопросы. Благодаря их опыту, вы без труда справитесь со сложными заданиями.</h2>
                        <UserList><img src={user1}/><div className='text'>Иван Артемьев<br/>
                            <span>Россия, Москва</span><br/><img src={stars}/></div></UserList>
                    </ReviewsItem>
                </ReviewsContainer>
            </ReviewsBase>
            <SubsContainer>
                <SubsHeader><span>ПОДПИШИСЬ ЧТОБЫ ПОЛУЧИТЬ ДОСТУП КО ВСЕМ КУРСАМ</span><ButtonSubs>Начать обучение</ButtonSubs></SubsHeader>
                <SubsContBase>
                    <SubsContOne>
                        Классический план обучения
                        <h1>Бесплатно</h1>
                        Перед вами открыт мир: исследуйте новые пути и протоптайте свой путь к успеху
                        <ul>
                            <li><span>Доступ к бесплатным курсам</span></li>
                            <li><span>Без вложений</span></li>
                            <li><span>Легко находимые материалы</span></li>
                        </ul>
                        <SubsButtonOne>
                            Ваш тариф
                        </SubsButtonOne>
                    </SubsContOne>
                    <SubsContTwo>
                        Продвинутый план обучения
                        <h1>4.999 руб / мес.</h1>
                        Перед вами открыт мир: исследуйте новые пути и протоптайте свой путь к успеху
                        <ul>
                            <li><span>Доступ ко всем курсам</span></li>
                            <li><span>Без вложений</span></li>
                            <li><span>Легко находимые материалы</span></li>
                        </ul>
                        <SubsButtonTwo>
                            Начать обучение
                        </SubsButtonTwo>
                    </SubsContTwo>
                </SubsContBase>
            </SubsContainer>
        </MainContainer>
    )
}

export default MainComponent;