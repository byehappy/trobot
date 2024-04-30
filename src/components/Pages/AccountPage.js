import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CourseCard from "../courseCard/CourseCard";
import {ContainerGrid} from "../catalogComponents/Catalog.style";
import * as React from "react";

export const AccountPage = () => {
    const [profileData, setProfileData] = useState(null);
    const [purchaseCourses, setPurchaseCourses] = useState(null);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const profileResponse = await fetch(`http://localhost:3001/api/profile/${id}`);
                const profileData = await profileResponse.json();
                setProfileData(profileData);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, [id]);
    const handleProfileUpdate = async (updatedProfileData) => {
        try {
            const response = await fetch(`http://localhost:3001/api/profile/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProfileData),
            });

            if (!response.ok) {
                throw new Error("Failed to update profile");
            }

            setProfileData(updatedProfileData);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const purchaseData = await fetch(`http://localhost:3001/api/purchase/user/${id}`, { method: "GET" });
                const purchaseCourses = await purchaseData.json();

                // Массив для хранения данных о курсах
                const coursesData = [];

                // Для каждой записи покупки получаем данные о курсе
                for (const purchase of purchaseCourses) {
                    const courseData = await fetch(`http://localhost:3001/api/courses/${purchase.courseId}`, { method: "GET" });
                    const course = await courseData.json();
                    coursesData.push(course);
                }

                // Сохраняем данные о курсах в состояние
                setPurchaseCourses(coursesData);
            } catch (error) {
                console.error("Ошибка при загрузке курсов:", error);
            }
        };

        fetchCourses();
    }, [id]);


    return (
        <div>
            {profileData && (
                <div>
                    <h2>User Profile</h2>
                    <p>Name: {profileData.bio}</p>
                    <p>Email: {profileData.phone}</p>
                    <button onClick={() => handleProfileUpdate({ ...profileData, name: "New Name" })}>
                        Update Name
                    </button>
                </div>
            )}
            <ContainerGrid>
                {purchaseCourses && purchaseCourses.map((course, index) => (
                    <CourseCard course={course} key={index} index={index} />
                ))}
            </ContainerGrid>
        </div>
    );
};