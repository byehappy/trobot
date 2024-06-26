import React, {useEffect, useState} from 'react';
import {IntroTextH1, IntroTextSubtitle} from "../Pages/Reviews";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";

const LessonContainer = styled.div`
  margin-left: 1vw;
  margin-right: 1vw;
  padding-top: 5vw;
`

const Lesson = () => {
    const [lessonData, setLessonData] = useState(null);
    const [currentContent, setCurrentContent] = useState('content'); // Состояние текущего контента: 'content' или 'video'
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate()
    const accessToken = localStorage.getItem("accessToken");
    const bearer = 'Bearer ' + accessToken;


    //TODO: добавить тостер к ошибке о том что нет доступа к уроку
    useEffect(() => {
        fetch(`http://localhost:3001/api/lessons/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("");
                }
                return res.json();
            })
            .then(data => setLessonData(data))
            .catch(err => {
                navigate("/");
            });
    }, [bearer, id, navigate]);


    // Функция для изменения текущего контента на 'content'
    const showContent = () => {
        setCurrentContent('content');
    };

    // Функция для изменения текущего контента на 'video'
    const showVideo = () => {
        setCurrentContent('video');
    };

    return (
        <LessonContainer>
            {lessonData && (
                <div style={{display: "grid", gridTemplateColumns: "40% 60%", gap: "1vw"}}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        overflowY: 'scroll',
                        height: "40vw"
                    }}>
                        <div className={"flex justify-center gap-5"}>
                            <button style={{border: "none", background: "none", cursor: "pointer", fontSize: "1vw"}}
                                    onClick={showContent}>Урок
                            </button>
                            <button style={{border: "none", background: "none", cursor: "pointer", fontSize: "1vw"}}
                                    onClick={showVideo}>Видео
                            </button>
                        </div>
                        <IntroTextH1>Урок {lessonData.part}</IntroTextH1>
                        <IntroTextSubtitle className={"mb-5"}>{lessonData.name}</IntroTextSubtitle>
                        {currentContent === 'content' ? (
                            <>
                                <p>{lessonData.content}</p>
                            </>
                        ) : (
                            <>
                                <div style={{minHeight: "30vw", marginTop: "1vw"}}>
                                    <iframe width="100%" height="100%" frameBorder="0" title="обучающее видео"
                                            allow="fullscreen;"
                                            src={`https://www.youtube.com/embed/${lessonData.contentVideo[0]}`}></iframe>
                                </div>
                            </>
                        )}
                    </div>
                    <iframe src="https://codesandbox.io/embed/49pt9x?view=editor+%2B+preview&module=%2Fsrc%2Findex.js"
                            style={{width: "100%", height: "100%", border: 0, borderRadius: "4px", overflow: "hidden"}}
                            title="test-1"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            )}
        </LessonContainer>
    );
};

export default Lesson;
