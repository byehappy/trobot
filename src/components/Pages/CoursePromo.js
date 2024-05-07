import { useEffect, useState } from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch, useSelector} from "react-redux";
import {addError} from "../../toolkitRedux/errorSlice";

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
`;const PurchaseButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const CoursePromo = () => {
    const [courseMaterial, setCourseMaterial] = useState(null);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.toolkit.id);
    const { authed } = useAuth();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/api/course-material/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => setCourseMaterial(data))
            .catch(err => dispatch(addError(err.message)));
    }, [id]);

    const handlePurchase = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/purchase`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    courseId: id
                })
            });

            if (!response.ok) {
                throw new Error("Failed to purchase course");
            }

        } catch (error) {
            console.error("Error purchasing course:", error);
        }
    };


    return (
        <CourseMaterialContainer>
            {courseMaterial && (
                <>
                    <CourseMaterialItem>
                        <h2>{courseMaterial.profession}</h2>
                        <p>{courseMaterial.about}</p>
                    </CourseMaterialItem>
                    {authed && (
                        <PurchaseButton onClick={handlePurchase}>Купить курс</PurchaseButton>
                    )}
                </>
            )}
        </CourseMaterialContainer>
    );
};

export default CoursePromo;