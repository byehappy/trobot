import React, {useState} from "react";
import {ApplicationPage} from "./applications/ApplicationPage";

export const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('course');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>

            <div className={" gap-3 flex w-auto"}>
                <button
                    className={"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
                    onClick={() => handleTabChange('Application')}>Заявки
                </button>
            </div>

            {activeTab ==="Application" && <ApplicationPage/>}
        </div>
    );
};