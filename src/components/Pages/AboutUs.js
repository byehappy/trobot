import intro from "../Images/Intro.svg"
import * as React from "react";
import missionImage from '../Images/_Layer_.svg'
import courseImage from '../Images/Objects.svg'
import teamImage from '../Images/Illustration.svg'
import {
    Container,
    IntroContainer,
    IntroText,
    IntroTextH1,
    IntroTextSubtitle,
    Review, ReviewsCard,
    ReviewsContainer, ReviewsText, TextBody, TextH3
} from "./Reviews";
import styled from "styled-components";
import {ButtonIntro} from "../mainComponent/MainComponent.style";
const IntroPicture = styled.img`
  height: 30vw;
  width: 20vw;
  margin-top: 2vw;
`
const ReviewsPicture = styled.img`
  width: 50vw;
`
export const AboutUs = () => {
    return (
        <Container>
            <IntroContainer>
                <IntroText>
                    <IntroTextH1>О НАС</IntroTextH1>
                    <IntroTextSubtitle>Мы команда профессиональных робототехников, которые разработали этот сайт с курсами
                        по робототехнике для того, чтобы помочь людям начать свой путь в этой увлекательной области.</IntroTextSubtitle>
                    <ButtonIntro to={'/catalog'}>Выбрать курс</ButtonIntro>
                </IntroText>
                <IntroPicture src={intro}/>
            </IntroContainer>
            <ReviewsContainer>
                <Review>
                    <ReviewsCard left style={{marginLeft:"5vw"}}>
                        <ReviewsPicture src={missionImage}/>
                    </ReviewsCard>
                    <ReviewsText right>
                        <TextH3>Наша миссия</TextH3>
                        <TextBody>Мы стремимся сделать робототехнику доступной для каждого. Наша цель - помочь нашим студентам научиться создавать и программировать роботов, чтобы они могли реализовать свои идеи
                            и превратить их в реальность.</TextBody>
                    </ReviewsText>
                </Review>
                <Review>
                    <ReviewsText left>
                        <TextH3>Наши курсы</TextH3>
                        <TextBody>Мы предлагаем широкий выбор курсов
                            по робототехнике, начиная от основ
                            и заканчивая продвинутыми технологиями. Наши инструкторы - эксперты в своей области, которые помогут вам разобраться в тонкостях робототехники и научат вас создавать
                            и программировать роботов.</TextBody>
                    </ReviewsText>
                    <ReviewsCard right style={{marginRight:"5vw"}}>
                        <ReviewsPicture src={courseImage}/>
                    </ReviewsCard>
                </Review>
                <Review>
                    <ReviewsCard left style={{marginLeft:"5vw"}}>
                        <ReviewsPicture src={teamImage}/>
                    </ReviewsCard>
                    <ReviewsText right>
                        <TextH3>Наша команда</TextH3>
                        <TextBody>Мы - команда профессионалов в области робототехники. Нас объединяет любовь
                            к технологиям и желание делиться своими знаниями с другими. Мы гордимся тем, что наши курсы помогают людям научиться создавать и программировать роботов,
                            и мы надеемся, что наш сайт будет полезен
                            и для вас.</TextBody>
                    </ReviewsText>
                </Review>
            </ReviewsContainer>
        </Container>
    );
};