import * as React from 'react';
import {Button, Container, ContainerGrid} from "./Catalog.style";
import {useEffect, useState} from "react";
import CourseCard from "../courseCard/CourseCard";
export const Catalog = () => {
    const [dataCourses, setDataCourses] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/api/courses",{method:"GET"}).then(res => res.json()).then(data => setDataCourses(data)).catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Container>
                <Button>
                    Введение
                </Button>
                <Button>
                    Программирование
                </Button>
                <Button>
                    ИИ
                </Button>
                <Button>
                    Разработка
                </Button>
                <Button>
                    Применение
                </Button>
            </Container>
            <ContainerGrid>
                {dataCourses && dataCourses.map((course,index) => {
                    return <CourseCard course={course} key={course.id} index={index}/>
                })}
            </ContainerGrid>
        </div>
    );
};