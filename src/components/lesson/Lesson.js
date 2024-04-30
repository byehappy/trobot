import React, { useEffect, useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MainContainer } from "../mainComponent/MainComponent.style";
import { IntroTextH1 } from "../Pages/Reviews";
import { useParams } from "react-router-dom";

const Lesson = () => {
    const [lessonData, setLessonData] = useState(null);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/api/lessons/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => setLessonData(data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <MainContainer>
            {lessonData && (
                <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left",overflowY:'scroll',height: "40vw"}}>
                        <IntroTextH1>{lessonData.name}</IntroTextH1>
                        <p>{lessonData.content}</p>
                        <div style={{minHeight:"30vw",padding:"2vw"}}>
                            <iframe width="100%" height="100%" frameBorder="0" title="обучающее видео" src={`https://www.youtube.com/embed/${lessonData.contentVideo[0]}`}></iframe>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <LiveProvider code="<div>Hello World</div>">
                            <LiveEditor style={{ height: '25vw', textAlign: "left" }} />
                            <LiveError />
                            <LivePreview />
                        </LiveProvider>
                    </div>
                </div>
            )}
        </MainContainer>
    );
};

export default Lesson;
