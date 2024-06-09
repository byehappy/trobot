import React, {useState} from "react";
import CreateCourse from "./CreateCourse";
const initValueCourse = {
    title: '',
    description: '',
    tags: [],
    duration: '',
    price: '',
    iconUrl: '',
};

const initValueLesson = [{
    part: '',
    name: '',
    content: '',
    contentVideo: [],
    duration: '',
}];

const initValuePromo = {
    profession: '',
    about: '',
    statistics: '',
    skillsLearned: [],
    advantages: [],
    testimonials: [],
    curriculum: '',
    requirements: [],
    resources: [],
};


export const OwnCreatorBuilder = () => {
    const [activeTab, setActiveTab] = useState('course');
    const [courseFormValues, setCourseFormValues] = useState(initValueCourse);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const handleCourseFormChange = (values) => {
        console.log(courseFormValues)
        setCourseFormValues(values);
    };
    const handleSendToServer = () => {
        // Здесь можно добавить логику отправки данных на сервер
        console.log("Отправка данных на сервер:", courseFormValues);
    };
    return (
        <div>
            <div className={"justify-center gap-3 flex w-auto"}>
                <button
                    className={"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
                    onClick={() => handleTabChange('course')}>Курс
                </button>
                <button
                    className={"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}

                    onClick={() => handleTabChange('lesson')}>Урок
                </button>
                <button
                    className={"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
                    onClick={() => handleTabChange('promo')}>Промо
                </button>
            </div>

            {activeTab === 'course' && <CreateCourse
                initialValues={courseFormValues} onFormChange={handleCourseFormChange}/>}
            {activeTab === 'lesson'}
            {activeTab === 'promo'}

            <button
                onClick={handleSendToServer}
                className={"py-2.5 px-5 me-2 mb-2 mt-10 text-sm font-medium text-white focus:outline-none bg-green-500 rounded-lg  border-gray-200 hover:bg-green-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-green-500 dark:focus:ring-green-700 dark:bg-green-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-green-700"}
            >
                Создать курс
            </button>
        </div>
    );
};