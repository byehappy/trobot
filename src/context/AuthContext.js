import { createContext, useMemo, useState, useCallback } from "react";
import { store } from "../toolkitRedux";
import { resetAuthState, setId, setLogin, setRole } from "../toolkitRedux/toolkitSlice";
import { useDispatch } from "react-redux";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const sessionStorageValue = sessionStorage.getItem("loggedIn");
    const initialAuthedState = sessionStorageValue !== null ? JSON.parse(sessionStorageValue) : false;
    const [authed, setAuthed] = useState(initialAuthedState);
    const dispatch = useDispatch();

    const login = useCallback(async (identity, password) => {
        try {
            const response = await fetch("http://localhost:3001/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({ login: identity, passwordHash: password })
            });

            if (!response.ok) {
                throw await response.json();
            }

            const tokens = await response.json();
            localStorage.setItem('refreshToken', tokens.refreshToken);
            localStorage.setItem('accessToken', tokens.accessToken);

            const responseData = await fetch("http://localhost:3001/api/user/decode-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({ token: localStorage.getItem("accessToken") })
            });

            if (!responseData.ok) {
                throw await responseData.json();
            }

            const userData = await responseData.json();
            setAuthed(true);
            sessionStorage.setItem("loggedIn", "true");
            store.dispatch(setLogin(userData.login));
            store.dispatch(setRole(userData.role));
            store.dispatch(setId(userData.id));
        } catch (error) {
            throw error;
        }
    }, [setAuthed, dispatch]);

    const logout = useCallback(() => {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("loggedIn");
        dispatch(resetAuthState());
    }, [dispatch]);

    const authObj = useMemo(() => ({ authed, setAuthed, login, logout }), [authed, setAuthed, login, logout]);

    return (
        <AuthContext.Provider value={authObj}>
            {children}
        </AuthContext.Provider>
    );
};
