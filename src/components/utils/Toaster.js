import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeError } from "../../toolkitRedux/errorSlice";

const Toaster = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.errors);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (errors.length > 0) {
                dispatch(removeError(0));
            }
        }, 5000);
        return () => clearTimeout(timeout);
    }, [errors, dispatch]);

    return (
        <div style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 9999 }}>
            {errors.map((error, index) => (
                <div key={index} style={{ background: 'red', color: 'white', padding: 10,margin:5 }}>
                    {error}
                    <button style={{margin:5}} onClick={() => dispatch(removeError(index))}>✖️</button>
                </div>
            ))}
        </div>
    );
};

export default Toaster;
