import { useEffect, useState } from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const CourseMaterialContainer = styled.div`
  padding: 20px;
`;

const CourseMaterialItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }
`;
const CoursePromo = () => {
    const [courseMaterial, setCourseMaterial] = useState(null);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/api/course-material/${id}`, { method: 'GET' })
            .then(res =>res.json())
            .then(data => setCourseMaterial(data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <CourseMaterialContainer>
            {courseMaterial && (
                <>
                    <CourseMaterialItem>
                        <h2>{courseMaterial.profession}</h2>
                        <p>{courseMaterial.about}</p>
                    </CourseMaterialItem>
                </>
            )}
        </CourseMaterialContainer>
    );
};

export default CoursePromo;
