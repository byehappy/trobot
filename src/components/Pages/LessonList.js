import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchLessons } from '../../toolkitRedux/lessonsSlice';
import styled from 'styled-components';
import { Desctop_h2, Desctop_h3, Desctop_subtitle } from "../../styles/styles";
import anime from 'animejs/lib/anime.es.js';
import {addMessage} from "../../toolkitRedux/ToasterSlice";

const LessonList = () => {
    const [course, setCourse] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, lessons, error } = useSelector((state) => state.lessons);
    const [expandedBlocks, setExpandedBlocks] = useState({});
    const blockRefs = useRef({});

    useEffect(() => {
        dispatch(fetchLessons(id));
    }, [dispatch, id]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/courses/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(err => dispatch(addMessage(err.message)));
    }, [dispatch, id]);

    const toggleBlock = (blockId) => {
        setExpandedBlocks((prev) => {
            const isExpanded = !prev[blockId];

            if (isExpanded) {
                anime({
                    targets: blockRefs.current[blockId],
                    maxHeight: [`0px`, `${blockRefs.current[blockId].scrollHeight}px`],
                    duration: 500,
                    easing: 'easeInOutQuad',
                });
            } else {
                anime({
                    targets: blockRefs.current[blockId],
                    maxHeight: [`${blockRefs.current[blockId].scrollHeight}px`, `0px`],
                    duration: 500,
                    easing: 'easeInOutQuad',
                });
            }

            return {
                ...prev,
                [blockId]: isExpanded,
            };
        });
    };

    const handleLessonClick = (lessonId) => {
        navigate(`/lesson/${lessonId}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const lessonBlocks = lessons.lessons ? lessons.lessons.reduce((acc, lesson) => {
        const blockId = Math.floor(lesson.part);
        if (!acc[blockId]) acc[blockId] = [];
        acc[blockId].push(lesson);
        return acc;
    }, {}) : {};

    return (
        <Container>
            {course && <>
                <Description>
                    <TitleCourse>{course.title}</TitleCourse>
                    <DescriptionCourse>{course.description}</DescriptionCourse>
                </Description>
            </>}
            {Object.keys(lessonBlocks).map((blockId) => (
                <Block key={blockId}>
                    <Divider />
                    <BlockHeader onClick={() => toggleBlock(blockId)}>
                        <BlockTitle>
                            {blockId === "1" ? "Введение" : blockId === "2" ? "Основы" : blockId === "3" ? "Всякие фишечки" : "Конец"}
                        </BlockTitle>
                        <ToggleIcon>{expandedBlocks[blockId] ? "−" : "+"}</ToggleIcon>
                    </BlockHeader>
                    <BlockContent ref={el => blockRefs.current[blockId] = el} style={{ maxHeight: expandedBlocks[blockId] ? `${blockRefs.current[blockId].scrollHeight}px` : '0px', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
                        {lessonBlocks[blockId].map((lesson, index) => (
                            <Lesson key={lesson.id} onClick={() => handleLessonClick(lesson.id)}>
                                <LessonPart>{`${blockId}.${index + 1}`}</LessonPart>
                                <LessonName>{lesson.name}</LessonName>
                                <LessonDuration>{lesson.duration} мин.</LessonDuration>
                            </Lesson>
                        ))}
                    </BlockContent>
                    <Divider />
                </Block>
            ))}
        </Container>
    );
};

const Container = styled.div`
    padding: 20px;
`;

const TitleCourse = styled.div`
    text-align: left;
    font-size: 40px;
    ${Desctop_h2}
`;

const DescriptionCourse = styled.div`
    text-align: right;
    ${Desctop_subtitle}
`;

const Description = styled.div`
    margin-bottom: 30px;
    text-align: right;
`;

const Block = styled.div`
    margin-bottom: 20px;
`;

const BlockHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    padding: 10px 0;
`;

const BlockTitle = styled.div`
    font-size: 24px;
`;

const ToggleIcon = styled.span`
    font-size: 24px;
`;

const BlockContent = styled.div`
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
`;

const Lesson = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    cursor: pointer;
`;

const LessonName = styled.div`
    font-size: 20px;
    ${Desctop_h3};
    margin-left: 10px;
`;

const LessonPart = styled.div`
    font-size: 20px;
    ${Desctop_h3}
`;

const LessonDuration = styled.div`
    font-size: 16px;
    ${Desctop_h3};
    margin-left: auto;
`;

const Divider = styled.div`
    height: 1px;
    background-color: lightgray;
`;

export default LessonList;
