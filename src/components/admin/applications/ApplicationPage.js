import {useState, useEffect, useCallback} from "react";

export const ApplicationPage = () => {
    const [applications, setApplications] = useState([]);
    const accessToken = localStorage.getItem("accessToken");
    const bearer = 'Bearer ' + accessToken;
    // Функция для загрузки списка заявок
    const fetchApplications = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:3001/api/teacher-application", {
                headers: {
                    'Authorization': bearer,
                    "Content-Type": "application/json"
                },
            });
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    }, [bearer]);

    useEffect(() => {
        fetchApplications();
    }, [fetchApplications]);

    // Функция для обновления статуса заявки
    const applyStatus = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/teacher-application/apply/${id}`, {
                method: "GET",
                headers: {
                    'Authorization': bearer,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to update application status");
            }

            // Обновление списка заявок после успешного обновления статуса
            fetchApplications();
        } catch (error) {
            console.error("Error updating application status:", error);
        }
    };
    const declineStatus = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/teacher-application/decline/${id}`, {
                method: "GET",
                headers: {
                    'Authorization': bearer,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to update application status");
            }

            // Обновление списка заявок после успешного обновления статуса
            fetchApplications();
        } catch (error) {
            console.error("Error updating application status:", error);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "APPROVED":
                return "text-green-600";
            case "REJECTED":
                return "text-red-500";
            default:
                return "text-black";
        }
    };

    return (
        <div>
            <h2>Заявки</h2>
            {applications.map((application) => (
                <div className={"border p-4 my-4 grid grid-cols-2"}>
                    <div key={application.id} className="text-start col-span-2">
                        <p>ID: {application.id}</p>
                        <p>User ID: {application.userId}</p>
                        <p>Резюме: {application.info.split('\n').map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}</p>
                        <p className={`Status ${getStatusColor(application.status)}`}>Status: {application.status}</p>
                    </div>
                    {application.status === "PENDING" && (
                        <div className={"flex items-center mt-3"}>
                            <button
                                onClick={() => applyStatus(application.id)}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => declineStatus(application.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Reject
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
