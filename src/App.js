import './App.css';
import Header from "./components/header/Header";
import MainPage from "./components/Pages/MainPage";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Catalog} from "./components/catalogComponents/Catalog";
import {Reviews} from "./components/Pages/Reviews";
import CoursePromo from "./components/Pages/CoursePromo";
import RegisterForm from "./components/auth/RegisterForm";
import LoginForm from "./components/auth/LoginForm";
import {useCallback, useEffect, useRef} from "react";
import {resetAuthState, setAuthState, setId, setLogin, setRole} from "./toolkitRedux/toolkitSlice";
import {store} from "./toolkitRedux";

function App() {
    const getNewUserToken = async () => {
        const refreshToken = localStorage.getItem("refreshToken");
        const accessToken = localStorage.getItem("accessToken");
        const bearer = 'Bearer ' + refreshToken;
        try {
            const res = await fetch("http://localhost:3001/api/user/refresh", {
                method: "POST",
                headers: {
                    'Authorization': bearer,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    accessToken: accessToken,
                    refreshToken: refreshToken
                })
            });
            if (res.ok) {
                const data = await res.json();
                localStorage.setItem("refreshToken", data.refreshToken);
                localStorage.setItem("accessToken", data.accessToken);
                const userData = data.user
                store.dispatch(setAuthState(true))
                store.dispatch(setLogin(userData.login))
                store.dispatch(setRole(userData.role))
                store.dispatch(setId(userData.id))

            } else {
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("accessToken");
                store.dispatch(resetAuthState());
            }
        } catch (err) {
            console.log(err);
        }
    };

    const intervalRef = useRef();

    const getToken = useCallback(() => {
        if (localStorage.getItem("refreshToken") !== null) {
            getNewUserToken();
        }
    }, []);
    getToken();
    useEffect(() => {
        const interval = setInterval(() => getToken(), 1000 * 60 * 15);
        intervalRef.current = interval;
        return () => clearInterval(interval);
    }, [getToken]);


    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/auth/signup'} element={<RegisterForm/>}/>
                    <Route path={'/auth/signin'} element={<LoginForm/>}/>
                    <Route path={'/catalog'} element={<Catalog/>}/>
                    <Route path={'/reviews'} element={<Reviews/>}/>
                    <Route path={'/course-info/:id'} element={<CoursePromo/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
