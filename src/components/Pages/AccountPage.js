import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import CourseCard from "../courseCard/CourseCard";
import {ContainerGrid} from "../catalogComponents/Catalog.style";
import * as React from "react";
import {useSelector} from "react-redux";
import {useAuth} from "../../hooks/useAuth";

export const AccountPage = () => {
    const {authed} = useAuth()
    const [profileData, setProfileData] = useState(null);
    const [purchaseCourses, setPurchaseCourses] = useState(null);
    const [teacherApp, setTeacherApp] = useState(null);
    const [createProfile, setCreateProfile] = useState(false);
    const {role} = useSelector(state => state.toolkit);
    const userId = useSelector(state => state.toolkit.id);
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate()
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");

    const handleChangeCreate = () => {
        setCreateProfile(!createProfile)
    }

    //TODO:добавить тоастер по причине попытка входа не в свой профиль
    useEffect(() => {
        if (authed && userId !== null && userId !== id) {
            navigate("/");
        }
    }, [authed, userId, id, navigate]);

    useEffect(() => {
        const fetchTeacherApp = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const bearer = 'Bearer ' + accessToken;
                const teacherResponse = await fetch(`http://localhost:3001/api/teacher-application/${id}`, {
                    method: "GET",
                    headers: {
                        'Authorization': bearer,
                        "Content-Type": "application/json"
                    }
                });
                const teacherData = await teacherResponse.json();
                setTeacherApp(teacherData);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchTeacherApp();
    }, [id]);

    const fetchProfileData = useCallback(async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const bearer = 'Bearer ' + accessToken;
            const profileResponse = await fetch(`http://localhost:3001/api/profile/${id}`, {
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
    },[id])

    useEffect(() => {
        fetchProfileData();
    }, [fetchProfileData, id]);
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
            const profileResponse = await fetch(`http://localhost:3001/api/profile/`, {
                method: "POST",
                headers: {
                    'Authorization': bearer,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    bio,
                    phone,
                    userId: id
                })
            });
            const profileData = await profileResponse.json();
            setProfileData(profileData);
            setCreateProfile(false)
            fetchProfileData();
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };


    return (
        <div>
            <div className={"flex justify-center"}>
                {teacherApp ? (
                    <div className={"grid grid-cols-2 w-[35vw] gap-5"}>
                        <div>
                            <h2>{role} Профиль</h2>
                            {profileData && profileData.profile ? (
                                <>
                                    <p>Имя: {profileData.profile.bio}</p>
                                    <p>Номер телефона: {profileData.profile.phone}</p>
                                    <p>Почта: {profileData.email}</p>
                                    <button onClick={() => handleProfileUpdate()}>
                                        Обновить данные
                                    </button>
                                </>
                            ) : (
                                <>
                                    {createProfile === false && (
                                        <button onClick={handleChangeCreate} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Создать профиль
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                        <div className={"flex justify-center"}>
                            <div className={"border-2 rounded-2xl gap-2 flex flex-col w-52"}>
                                <h1 className={"font-bold text-2xl"}>Ваша заявка</h1>
                                Статус: {teacherApp.status}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={"w-[35vw] gap-5"}>
                        <h2>{role} Профиль</h2>
                        {profileData && profileData.profile  ? (
                            <>
                                <p>Имя: {profileData.profile.bio}</p>
                                <p>Номер телефона: {profileData.profile.phone}</p>
                                <p>Почта: {profileData.email}</p>
                                <button onClick={() => handleProfileUpdate()}>
                                    Обновить данные
                                </button>
                            </>
                        ) : (
                            <>
                                {createProfile === false && (
                                    <button onClick={handleChangeCreate} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Создать профиль
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
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
            <ContainerGrid>
                {purchaseCourses && purchaseCourses.map((course, index) => (
                    <CourseCard course={course} key={index} index={index} profilePage={true}/>
                ))}
            </ContainerGrid>
        </div>
    );
};