import { FieldContainer, FormHeader, SubmitButton } from "../auth/FormStyle";
import {ErrorMessage, Field, Form, Formik} from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";
import {addMessage} from "../../toolkitRedux/ToasterSlice";

const FormField = styled(Field)`
  background: white;
  border: 1px solid #9f9f9f;
  border-radius: .5vw;
  width: 25vw;
  margin-top: 0.5rem;
  font-size: 1rem;
  padding: 1vw;
`;

const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const TeachAppPage = () => {
    const dispatch = useDispatch();
    const { id } = useSelector(state => state.toolkit);
    const navigate = useNavigate();
    const initialValues = {
        experience: '',
        position: '',
        education: '',
        courses: '',
        category: '',
        awards: '',
        socialLinks: ''
    };

    const validationSchema = Yup.object({
        experience: Yup.string(),
        position: Yup.string(),
        education: Yup.string(),
        courses: Yup.string(),
        category: Yup.string(),
        awards: Yup.string(),
        socialLinks: Yup.string()
    });


    const handleSubmit = async (values) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const bearer = 'Bearer ' + accessToken;
            // Объединяем данные в одно поле info
            const info = `Стаж работы: ${values.experience}\nДолжность: ${values.position}\nОбразование: ${values.education}\nКурсы: ${values.courses}\nКатегория: ${values.category}\nНаграды: ${values.awards}\nСсылки на соц. сети: ${values.socialLinks}`;
            await fetch("http://localhost:3001/api/teacher-application", {
                method: "POST",
                headers: {
                    'Authorization': bearer,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    info: info,
                    userId: id
                })
            });
            //TODO: присылать тоастер об успешной отправке заявки
            navigate("/");
        } catch (error) {
            dispatch(addMessage(error.message));
        }
    };

    return (
        <>
            <FormHeader>
                Заявка на преподавательскую деятельность
            </FormHeader>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await handleSubmit(values);
                }}
            >
                {({ isSubmitting,handleChange }) => (
                    <Form className={'grid grid-cols-3'}>
                        <FieldContainer className="mb-6">
                            <Label htmlFor="experience" className="mb-2 block">Опыт работы</Label>
                            <FormField
                                as="textarea"
                                type="text"
                                name="experience"
                                placeholder="Опыт работы"
                                className="w-full border-gray-300 rounded-md p-2"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="experience" component="div" className="ErrorMessages" />
                        </FieldContainer>

                        <FieldContainer className="mb-6">
                            <Label htmlFor="position" className="mb-2 block">Должность</Label>
                            <FormField
                                as="textarea"
                                type="text"
                                name="position"
                                placeholder="Должность"
                                className="w-full border-gray-300 rounded-md p-2"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="position" component="div" className="ErrorMessages" />
                        </FieldContainer>

                        <FieldContainer className="mb-6">
                            <Label htmlFor="education" className="mb-2 block">Образование</Label>
                            <FormField
                                as="textarea"
                                type="text"
                                name="education"
                                placeholder="Образование"
                                className="w-full border-gray-300 rounded-md p-2"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="education" component="div" className="ErrorMessages" />
                        </FieldContainer>

                        <FieldContainer className="mb-6">
                            <Label htmlFor="courses" className="mb-2 block">Курсы повышения квалификации</Label>
                            <FormField
                                as="textarea"
                                type="text"
                                name="courses"
                                placeholder="Курсы повышения квалификации"
                                className="w-full border-gray-300 rounded-md p-2"
                                onChange={handleChange}
                            />
                        </FieldContainer>

                        <FieldContainer className="mb-6">
                            <Label htmlFor="category" className="mb-2 block">Категория</Label>
                            <FormField
                                as="textarea"
                                type="text"
                                name="category"
                                placeholder="Категория"
                                className="w-full border-gray-300 rounded-md p-2"
                                onChange={handleChange}
                            />
                        </FieldContainer>

                        <FieldContainer className="mb-6">
                            <Label htmlFor="awards" className="mb-2 block">Награды</Label>
                            <FormField
                                as="textarea"
                                type="text"
                                name="awards"
                                placeholder="Награды"
                                className="w-full border-gray-300 rounded-md p-2"
                                onChange={handleChange}
                            />
                        </FieldContainer>

                        <FieldContainer className="mb-6">
                            <Label htmlFor="socialLinks" className="mb-2 block">Ссылки на соц. сети</Label>
                            <FormField
                                as="textarea"
                                type="text"
                                name="socialLinks"
                                placeholder="Ссылки на соц. сети"
                                className="w-full border-gray-300 rounded-md p-2"
                                onChange={handleChange}
                            />
                        </FieldContainer>
                        <div className={"col-span-3 flex justify-center"}>
                            <SubmitButton className={"w-52 "} type="submit" >
                                {isSubmitting ? 'Загрузка...' : 'Отправить'}
                            </SubmitButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};
