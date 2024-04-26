import { useEffect, useRef, useState } from "react";
import { CourseCardWrapper, SubsContainer } from "./MainComponent.style";
import CourseCard from "../courseCard/CourseCard";

const SubsSlider = ({ dataCourses }) => {
    const [scrollX, setScrollX] = useState(0);
    const [scrollStep, setScrollStep] = useState(0);
    const subscribeRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (subscribeRef.current) {
                setScrollStep(subscribeRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial scroll step

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setScrollStep(subscribeRef.current.offsetWidth);
    }, [scrollX]); // Update scrollStep when scrollX changes

    const handleScroll = (direction) => {
        const newScrollX = direction === 'left' ? scrollX - scrollStep : scrollX + scrollStep;
        setScrollX(Math.max(0, newScrollX));
    };

    return (
        <>
            {dataCourses && dataCourses.length > 0 && (
                <>
                    <div>
                        <button onClick={() => handleScroll('left')}>Влево</button>
                        <button onClick={() => handleScroll('right')}>Вправо</button>
                    </div>
                    <SubsContainer ref={subscribeRef} style={{ transform: `translateX(-${scrollX}px)` }}>
                        {dataCourses.map((course, index) => (
                            <CourseCardWrapper key={course.id}>
                                <CourseCard course={course} index={index} />
                            </CourseCardWrapper>
                        ))}
                    </SubsContainer>
                    <div>
                        Текущее положение: {Math.floor(scrollX / scrollStep) + 1} из {Math.ceil(dataCourses.length * scrollStep / scrollStep)}
                    </div>
                </>
            )}
        </>
    );
};

export default SubsSlider;
