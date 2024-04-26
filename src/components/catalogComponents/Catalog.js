import * as React from 'react';
import { Button, Container, ContainerGrid } from "./Catalog.style";
import { useEffect, useState } from "react";
import CourseCard from "../courseCard/CourseCard";

export const Catalog = () => {
    const [categoryAll, setCategoryAll] = useState(null);
    const [dataCourses, setDataCourses] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        // Загрузка списка категорий
        fetch("http://localhost:3001/api/category", { method: "GET" })
            .then(res => res.json())
            .then(data => setCategoryAll(data))
            .catch(err => console.log(err));

        // Загрузка списка курсов
        fetch("http://localhost:3001/api/courses", { method: "GET" })
            .then(res => res.json())
            .then(data => setDataCourses(data))
            .catch(err => console.log(err));
    }, []);

    const handleCategoryClick = (categoryId) => {
        if (selectedCategory === categoryId) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(categoryId);
        }
    };

    const filteredCourses = selectedCategory ?
        dataCourses.filter(course => course.categoryIDs.includes(selectedCategory)) :
        dataCourses;

    return (
        <div>
            <Container>
                {/* Рендер кнопок категорий */}
                {categoryAll && categoryAll.map((category) => (
                    <Button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        active={category.id === selectedCategory}
                    >
                        {category.nameCategory}
                    </Button>
                ))}
            </Container>
            <ContainerGrid>
                {filteredCourses && filteredCourses.map((course, index) => (
                    <CourseCard course={course} key={course.id} index={index} />
                ))}
            </ContainerGrid>
        </div>
    );
};
