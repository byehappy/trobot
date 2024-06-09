import React from 'react';
import {
    CardContainer,
    CourseImage,
    Description,
    Duration,
    InfoContainer,
    Price,
    Tag,
    Tags,
    Title
} from "./CourseCard.style";
import {Link} from "react-router-dom";


const CourseCard = ({ course,index,profilePage }) => {

    return (
           <Link style={{textDecoration:"none"}} to={profilePage ? `/lessons/${course.id}` : `/course-info/${course.id}`}>
        <CardContainer index={index}>
               <InfoContainer>
                   <Tags>
                       {course.tags.map((tag, index) => (
                           <Tag key={index}>{tag} </Tag>
                       ))}
                       <Title>{course.title}</Title>
                   </Tags>
                   <div className={"gap-2 flex flex-col max-h-[5rem]"}>
                       <Description>{course.description}</Description>
                       <Duration>{course.duration}ч. <Price>{course.price} тыс. ₽</Price></Duration>
                   </div>
               </InfoContainer>
               <CourseImage src={course.iconUrl} alt={course.title}/>
        </CardContainer>
           </Link>
    );
};

export default CourseCard;
