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

function App() {
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
