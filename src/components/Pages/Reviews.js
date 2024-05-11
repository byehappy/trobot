import styled from "styled-components";
import * as React from 'react';
import IntroPicturePng from '../Images/ReviewsPicture.png'
import StudentOne from '../Images/student-1.png'
import StudentTwo from '../Images/student-2.png'
import Mike from '../Images/Miketyson.png'
import stars from '../Images/5 star.svg'
import {Desctop, Desctop_body, Desctop_subtitle} from "../../styles/styles";

const dynamicMarginForPicture = (props) => {
    if (props.right) {
        return `
      margin-right: 5vw;
    `;
    }
    if (props.left) {
        return `
      margin-left: 5vw;
    `;
    }
    return null;
};
const dynamicMarginForText = (props) => {
    if (props.right) {
        return `
      margin-left: 10vw;
      margin-right: 5vw;
    `;
    }
    if (props.left) {
        return `
      margin-left: 5vw;
      margin-right: 10vw;
    `;
    }
    return null;
};
export const Container = styled.div`
  margin-top: 5vw;
`
export const IntroContainer = styled.div`
  display: flex;
`
export const IntroPicture = styled.img`
  height: 25vw;
  background: #A46CFF;
  border-radius: 1vw;
`
export const IntroTextH1 = styled.div`
  ${Desctop};
  font-size: 3vw;
`
export const IntroText = styled.div`
  margin-right: 17vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vw;
  text-align: left;
`
export const IntroTextSubtitle = styled.div`
  ${Desctop_subtitle};
  font-size: 1.6vw;
`;
export const ReviewsContainer = styled.div`
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  gap: 5vw;
`
export const ReviewsPicture = styled.img`
`
export const ReviesTextH3 = styled.div`
  ${Desctop};
  font-size: 1vw;
`
export const TextSubtitle = styled.div`
  ${Desctop_subtitle};
  font-size: 1vw;
`;
export const ReviewsCard = styled.div`
  text-align: left;
  gap: 1vw;
  display: flex;
  flex-direction: column;
  ${dynamicMarginForPicture};
  align-items: flex-start;
`
export const Stars = styled.img`
  height: 1.5vw;
`
export const ReviewsText = styled.div`
  ${dynamicMarginForText};
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2vw;
  text-align: left;
`
export const Review = styled.div`
  display: flex;
`
export const TextH3 = styled.div`
  ${Desctop};
  font-size: 2vw;
`
export const TextBody = styled.div`
  ${Desctop_body};
  font-size: 1.4vw;
`
export const Reviews = () => {
    return (
        <Container>
            <IntroContainer>
                <IntroText>
                    <IntroTextH1>ОТЗЫВЫ НАШИХ ДОРОГИХ СТУДЕНТОВ</IntroTextH1>
                    <IntroTextSubtitle>Мы понимаем, что мнение студентов является важным фактором для нас, поэтому мы
                        собрали
                        их отзывы, чтобы вы могли лучше понять, что мы делаем и определиться с выбором. Вот некоторые
                        из отзывов, которые мы получили:</IntroTextSubtitle>
                </IntroText>
                <IntroPicture src={IntroPicturePng}/>
            </IntroContainer>
            <ReviewsContainer>
                <Review>
                    <ReviewsCard left>
                        <ReviewsPicture src={StudentOne}/>
                        <ReviesTextH3>Илья Жуков</ReviesTextH3>
                        <TextSubtitle>Россия, Владимир</TextSubtitle>
                        <Stars src={stars}/>
                    </ReviewsCard>
                    <ReviewsText right>
                        <TextH3>"Отличные курсы для тех, кто
                            хочет стать профессионалом
                            в робототехнике!"</TextH3>
                        <TextBody>Если вы хотите стать экспертом в области робототехники,
                            то эти курсы - отличный выбор для вас. Они предоставляют самые современные и эффективные
                            методы обучения, которые помогут вам освоить все необходимые навыки
                            и стать профессионалом в этой области</TextBody>
                    </ReviewsText>
                </Review>
                <Review>
                    <ReviewsText left>
                        <TextH3>"Благодаря помощи кураторов, я
                            без труда справился со сложными заданиями!"</TextH3>
                        <TextBody>Если у вас возникли вопросы или трудности в ходе обучения,
                            не стоит так беспокоиться. Кураторы этого курса всегда готовы помочь вам и ответить на все
                            ваши вопросы. Благодаря
                            их опыту, вы без труда справитесь со сложными заданиями.</TextBody>
                    </ReviewsText>
                    <ReviewsCard right>
                        <ReviewsPicture src={StudentTwo}/>
                        <ReviesTextH3>Иван Артемьев</ReviesTextH3>
                        <TextSubtitle>Россия, Москва</TextSubtitle>
                        <Stars src={stars}/>
                    </ReviewsCard>
                </Review>
                <Review>
                    <ReviewsCard left>
                        <ReviewsPicture src={Mike}/>
                        <ReviesTextH3>Майк Тайсон</ReviesTextH3>
                        <TextSubtitle>США, Нью-Йорк</TextSubtitle>
                        <Stars src={stars}/>
                    </ReviewsCard>
                    <ReviewsText right>
                        <TextH3>"Очень удобный график обучения, подходит для занятых людей!"</TextH3>
                        <TextBody>Если у вас мало свободного времени, но вы все же хотите изучать робототехнику, то этот
                            курс - идеальный выбор для вас. Он предлагает гибкий график обучения, который позволит вам
                            учиться в удобное время и темпе, не нарушая работу или учебу.</TextBody>
                    </ReviewsText>
                </Review>
            </ReviewsContainer>
        </Container>
    );
};