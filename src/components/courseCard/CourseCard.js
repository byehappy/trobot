import React from 'react';
import {CardContainer, CourseImage, Duration, InfoContainer, Price, Tag, Tags, Title} from "./CourseCard.style";


const CourseCard = ({ course,index }) => {

    return (
        <CardContainer index={index}>
            <InfoContainer>
                <Tags>
                    {course.tags.map((tag, index) => (
                        <Tag key={index}>{tag} </Tag>
                    ))}
                    <Title>{course.title}</Title>
                </Tags>
                <Duration>{course.duration}ч. <Price>{course.price} тыс. ₽</Price></Duration>
            </InfoContainer>
            <CourseImage src={course.iconUrl} alt={course.title}/>
        </CardContainer>
    );
};

export default CourseCard;
