import React, { useEffect, useRef  } from 'react';
import anime from 'animejs';
import { useSelector, useDispatch } from 'react-redux';
import { removeMessage } from "../../toolkitRedux/ToasterSlice";
import {
    ToasterContainer,
    Toast,
    ToasterIcon,
    ToasterMessage,
    CloseButton,
    CloseIcon,
    ExclamationIcon, DoneIcon
} from "./Toaster.style";

const ToasterWrapper = () => {
    const messages = useSelector(state => state.messages.messages);


    return (
        <ToasterContainer>
            {messages.map((message, index) => (
                <Toaster properties={message} key={message.id} index={index} />
            ))}
        </ToasterContainer>
    );
};

export default ToasterWrapper;

const Toaster = ({properties, index}) => {
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
                        dispatch(removeMessage(0));
                }
            });
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return <Toast ref={toasterRef} type={properties.type}>
        <ToasterIcon>
            {properties.type === "error" ? <ExclamationIcon />: <DoneIcon/>}
        </ToasterIcon>
        <ToasterMessage>{properties.message}</ToasterMessage>
        <CloseButton onClick={() => dispatch(removeMessage(index))}>
            <CloseIcon />
        </CloseButton>
    </Toast>
}