import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {
    CardContainerExample,
    CourseImage, Description,
    Duration,
    InfoContainer,
    Price,
    Tag,
    Tags,
    Title
} from "../courseCard/CourseCard.style";
import React from "react";

export const courseValidationSchema = Yup.object().shape({
    title: Yup.string().required('Название курса обязательно'),
    description: Yup.string(),
    duration: Yup.number().typeError('Продолжительность должна быть числом').required('Продолжительность обязательна').positive('Время должно быть положительным числом'),
    price: Yup.number().typeError('Цена должна быть числом').required('Цена обязательна').positive('Цена должна быть положительным числом'),
    iconUrl: Yup.string().url('Введите корректный URL иконки'),
});

const CreateCourse = ({initialValues, onFormChange}) => {
    const changeParentState = (e) => {
        const {name, value} = e.target;
        onFormChange({
            ...initialValues,
            [name]: value,
        });
    };
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Создание курса</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={courseValidationSchema}
            >
                {({handleChange, values}) => (
                    <Form className="space-y-4 grid grid-cols-[500px_minmax(900px,_1fr)] gap-8">
                        <div className={"w-full"}>
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Название
                                    курса</label>
                                <Field onChange={e => {
                                    handleChange(e)
                                    changeParentState(e)
                                }} type="text" name="title" id="title"
                                       className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"/>
                                <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1"/>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Описание
                                    курса</label>
                                <Field onChange={e => {
                                    handleChange(e)
                                    changeParentState(e)
                                }} as="textarea" name="description" id="description"
                                       className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"/>
                                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1"/>
                            </div>
                            <div>
                                <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Теги (через
                                    запятую)</label>
                                <Field onChange={e => {
                                    handleChange(e)
                                    changeParentState(e)
                                }} type="text" name="tags" id="tags"
                                       className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"/>
                                <ErrorMessage name="tags" component="div" className="text-red-500 text-sm mt-1"/>
                            </div>
                            <div>
                                <label htmlFor="duration"
                                       className="block text-sm font-medium text-gray-700">Продолжительность (в
                                    часах)</label>
                                <Field onChange={e => {
                                    handleChange(e)
                                    changeParentState(e)
                                }} type="text" name="duration" id="duration"
                                       className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"/>
                                <ErrorMessage name="duration" component="div" className="text-red-500 text-sm mt-1"/>
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Цена (в
                                    тысячах рублей)</label>
                                <Field onChange={e => {
                                    handleChange(e)
                                    changeParentState(e)
                                }} type="text" name="price" id="price"
                                       className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"/>
                                <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1"/>
                            </div>
                            <div>
                                <label htmlFor="iconUrl" className="block text-sm font-medium text-gray-700">URL
                                    иконки</label>
                                <Field onChange={e => {
                                    handleChange(e)
                                    changeParentState(e)
                                }} type="text" name="iconUrl" id="iconUrl"
                                       className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"/>
                                <ErrorMessage name="iconUrl" component="div" className="text-red-500 text-sm mt-1"/>
                            </div>
                        </div>
                        <div className={"bg-gray-200 flex justify-center items-center"}>
                            <CardContainerExample index={1}>
                                <InfoContainer>
                                    <Tags>
                                        {typeof values.tags === 'string' ? values.tags.split(',').map((tag, index) => (
                                            <Tag key={index}>{tag.trim()} </Tag>
                                        )) : null}
                                        <Title>{values.title}</Title>
                                    </Tags>
                                    <div className={"gap-2 flex flex-col"}>
                                        <Description>{values.description}</Description>
                                        <Duration>{values.duration}ч. <Price>{values.price} тыс. ₽</Price></Duration>
                                    </div>
                                </InfoContainer>
                                <CourseImage src={values.iconUrl} alt={values.title}/>
                            </CardContainerExample>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateCourse;