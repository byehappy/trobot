import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import MainPage from "../components/Pages/MainPage";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import {Catalog} from "../components/catalogComponents/Catalog";
import {Reviews} from "../components/Pages/Reviews";
import CoursePromo from "../components/Pages/CoursePromo";
import {AboutUs} from "../components/Pages/AboutUs";
import {AccountPage} from "../components/Pages/AccountPage";
import Lesson from "../components/lesson/Lesson";
import {useAuth} from "../hooks/useAuth";
import {ErrorPage} from "../components/Pages/ErrorPage";
import {ContactPage} from "../components/Pages/ContactPage";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {OwnCreatorBuilder} from "../components/createCourse/OwnCreator";

export const AppRoute = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/auth/signup'} element={<RegisterForm/>}/>
            <Route path={'/auth/signin'} element={<LoginForm/>}/>
            <Route path={'/catalog'} element={<Catalog/>}/>
            <Route path={'/reviews'} element={<Reviews/>}/>
            <Route path={'/course-info/:id'} element={<CoursePromo/>}/>
            <Route path={'/about'} element={<AboutUs/>}/>
            <Route path={"/contact"} element={<ContactPage/>}/>
            <Route path={"*"} element={<ErrorPage/>}/>
            <Route path={'/my-account/:id'} element={<ProtectedRoute element={<AccountPage/>}/>}/>
            <Route path={'/lesson/:id'} element={<ProtectedRoute element={<Lesson/>}/>}/>
            <Route path={'/teacher/create-course'} element={<ProtectedRouteRole reqRole={"TEACHER"} element={<OwnCreatorBuilder/>}/>}/>
        </Routes>
    );
};

const ProtectedRoute = ({element}) => {
    const {authed} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    useEffect(() => {
        if (!authed) {
            navigate('/auth/signin', {state: {from: currentPath}});
        }
    }, [authed, currentPath, navigate]);

    return (
        authed ? element : navigate('/auth/signin', {state: {from: currentPath}})
    );
};

const ProtectedRouteRole = ({element, reqRole}) => {
    const {authed} = useAuth();
    const role = useSelector(state => state.toolkit.role);
    const navigate = useNavigate();
    //TODO:добавить тоастер на то что нет роли админа или учителя в зависимости от reqRole
    useEffect(() => {
        if (!authed || (role !== null && role !== reqRole && role !=="ADMIN")) {
            navigate('/');
        }
    }, [authed, role, reqRole, navigate]);

    return element
};