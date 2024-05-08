import {NavLink} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div style={{fontSize:"2.5vw",fontWeight:"bold",minHeight:"30vw",display:"flex",flexDirection:"column",justifyContent:"center", gap:'2vw'}}>
            Cтраница не найдена<br/>
            <NavLink to={'/'}>Вернуться на главную страницу</NavLink>
        </div>
    );
};