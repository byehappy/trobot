import {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../toolkitRedux/ToasterSlice";

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
const PurchaseButton = styled.button`
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
    const [checkPurchase, setCheckPurchase] = useState(null);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.toolkit.id);
    const {authed} = useAuth();
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCourseMaterial = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/course-material/${id}`, {method: 'GET'});
                const data = await res.json();
                setCourseMaterial(data);
            } catch (err) {
                dispatch(addError(err.message));
            }
        };

        fetchCourseMaterial();
    }, [dispatch, id]);

    useEffect(() => {
        const checkUserPurchase = async () => {
            if (userId && courseMaterial) {
                try {
                    const res = await fetch(`http://localhost:3001/api/purchase/check/course/${id}/${userId}`, {method: 'GET'});
                    const data = await res.json();
                    setCheckPurchase(data.purchased);
                } catch (err) {
                    dispatch(addError(err.message));
                }
            }
        };

        checkUserPurchase();
    }, [userId, courseMaterial, dispatch, id]);

    const handlePurchase = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const bearer = 'Bearer ' + accessToken;
            const response = await fetch(`http://localhost:3001/api/purchase`, {
                method: "POST",
                headers: {
                    'Authorization': bearer,
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
            const courseResponse = await fetch(`http://localhost:3001/api/courses/${id}`, {
            method: "Get",
                headers: {
                "Content-Type": "application/json"
            }
        });
        const course = await courseResponse.json()
            dispatch(addMessage({type: "success", message: `вы успешно купили курс ${course.title}`}));

        } catch (error) {
            dispatch(addMessage({type: "error", message: error.message}));
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
                        checkPurchase ? <Link to={`/lessons/${id}`}><PurchaseButton>Перейти к урокам</PurchaseButton></Link>:
                        <PurchaseButton onClick={handlePurchase}>Купить курс</PurchaseButton>
                    )}
                </>
            )}
        </CourseMaterialContainer>
    );
};

export default CoursePromo;