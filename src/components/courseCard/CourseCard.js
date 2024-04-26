import React from 'react';
import {CardContainer, CourseImage, Duration, InfoContainer, Price, Tag, Tags, Title} from "./CourseCard.style";
import {Link, NavLink} from "react-router-dom";


const CourseCard = ({ course,index }) => {

    return (
           <Link style={{textDecoration:"none"}} to={`/course-info/${course.id}`}>
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
           </Link>
    );
};

export default CourseCard;
