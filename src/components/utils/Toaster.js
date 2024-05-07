import React, { useEffect, useRef  } from 'react';
import anime from 'animejs';
import { useSelector, useDispatch } from 'react-redux';
import { removeError } from "../../toolkitRedux/errorSlice";
import {
    ToasterContainer,
    ErrorToast,
    ErrorIcon,
    ErrorMessage,
    CloseButton,
    CloseIcon,
    ExclamationIcon
} from "./Toaster.style";

const ToasterWrapper = () => {
    const errors = useSelector(state => state.errors.errors);


    return (
        <ToasterContainer>
            {errors.map((error, index) => (
                <Toaster error={error} key={error.id} index={index} />
            ))}
        </ToasterContainer>
    );
};

export default ToasterWrapper;

const Toaster = ({error, index}) => {
    const toasterRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        anime({
            targets: toasterRef.current,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: 'easeInOutQuad'
        });
        const timeout = setTimeout(() => {
            anime({
                targets: toasterRef.current,
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 1000,
                easing: 'easeInOutQuad',
                complete: () => {
                        dispatch(removeError(0));
                }
            });
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return <ErrorToast ref={toasterRef}>
        <ErrorIcon>
            <ExclamationIcon />
        </ErrorIcon>
        <ErrorMessage>{error.message}</ErrorMessage>
        <CloseButton onClick={() => dispatch(removeError(index))}>
            <CloseIcon />
        </CloseButton>
    </ErrorToast>
}