import {Navigate, Route, Routes} from "react-router-dom";
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

            <Route path={'/my-account/:id'} element={<ProtectedRoute element={ <AccountPage/>}/>}/>
            <Route path={'/lesson/:id'} element={<ProtectedRoute element={ <Lesson/>}/>}/>
        </Routes>
    );
};

const ProtectedRoute = ({ element} ) => {
    const {authed} = useAuth()

    return (
        authed ? element : <Navigate to="/auth/signin" />
    );
};
