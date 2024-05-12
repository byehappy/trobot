import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CourseCard from "../courseCard/CourseCard";
import {ContainerGrid} from "../catalogComponents/Catalog.style";
import * as React from "react";
import {useSelector} from "react-redux";
import {useAuth} from "../../hooks/useAuth";

export const AccountPage = () => {
    const {authed} = useAuth()
    const [profileData, setProfileData] = useState(null);
    const [purchaseCourses, setPurchaseCourses] = useState(null);
    const [createProfile, setCreateProfile] = useState(false);
    const {role} = useSelector(state => state.toolkit);
    const userId = useSelector(state => state.toolkit.id);
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate()
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");

    const handleChangeCreate = () =>{
        setCreateProfile(!createProfile)
    }

    //TODO:добавить тоастер по причине попытка входа не в свой профиль
    useEffect(() => {
        if (authed && userId !== null && userId !== id) {
            navigate("/");
        }
    }, [authed, userId, id, navigate]);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const bearer = 'Bearer ' + accessToken;
                const profileResponse = await fetch(`http://localhost:3001/api/profile/${id}`,{
                    headers: {
                        'Authorization': bearer,
                        "Content-Type": "application/json"
                    }
                });
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
                const purchaseData = await fetch(`http://localhost:3001/api/purchase/user/${id}`, {method: "GET"});
                const purchaseCourses = await purchaseData.json();

                // Массив для хранения данных о курсах
                const coursesData = [];

                // Для каждой записи покупки получаем данные о курсе
                for (const purchase of purchaseCourses) {
                    const courseData = await fetch(`http://localhost:3001/api/courses/${purchase.courseId}`, {method: "GET"});
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

    const handleCreateProfile = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const bearer = 'Bearer ' + accessToken;
            const profileResponse = await fetch(`http://localhost:3001/api/profile/`,{
                method: "POST",
                headers: {
                    'Authorization': bearer,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    bio,
                    phone,
                    userId:id
                })
            });
            const profileData = await profileResponse.json();
            setProfileData(profileData);
            setCreateProfile(false)
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };


    return (
        <div>
                <div>
                    <h2>{role} Profile</h2>
                    {profileData ? (
                        <>
                            <p>Name: {profileData.bio}</p>
                            <p>Email: {profileData.phone}</p>
                            <button onClick={() => handleProfileUpdate({...profileData, name: "New Name"})}>
                                Update Name
                            </button>
                        </>
                    ) : <>
                        {createProfile===false && <button onClick={handleChangeCreate} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Создать профиль
                    </button>}
                    </>
                    }
                    {createProfile && <>
                        <div className="mt-5">
                            <input
                                type="text"
                                placeholder="Введите номер телефона"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="p-2 rounded border border-gray-300 mr-2"
                            />
                            <input
                                type="text"
                                placeholder="Введите ФИО"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="p-2 rounded border border-gray-300 mr-2"
                            />
                            <button
                                onClick={handleCreateProfile}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Создать профиль
                            </button>
                            <button
                                onClick={handleChangeCreate}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                            >
                                Отменить
                            </button>
                        </div>
                    </>}
                </div>
            <ContainerGrid>
                {purchaseCourses && purchaseCourses.map((course, index) => (
                    <CourseCard course={course} key={index} index={index}/>
                ))}
            </ContainerGrid>
        </div>
    );
};