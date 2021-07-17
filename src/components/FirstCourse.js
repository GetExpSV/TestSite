import React, {useEffect, useRef, useState} from 'react';
import '../App.css';

const FirstCourse = () => {
    let [days, setDays] = useState(18);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(5);


    let FirstCourseCalc = () => {
        if (seconds >= 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            setSeconds(59);
            if (minutes > 0) {
                setMinutes(minutes - 1);
            }
            if (minutes === 0) {
                setMinutes(59)
                if (hours >= 0) {
                    setHours(hours - 1)
                }
                if (hours === 0) {
                    setHours(23)
                    if (days >= 0) {
                        setDays(days - 1)
                    }
                }
            }
        }
    }

    setTimeout(FirstCourseCalc, 1000);

    return (
        <div className="main-screen-numbers">
            <div className="main-screen-numbers-days" id={'days'}>{days}<span>Дней</span></div>
            <div className="main-screen-numbers-hours" id={'hours'}>{hours}<span>Часов</span></div>
            <div className="main-screen-numbers-minutes" id={'minutes'}>{minutes}<span>Минут</span>
            </div>
            <div className="main-screen-numbers-seconds" id={'seconds'}>{seconds}<span>Секунд</span></div>
        </div>

    );
};

export default FirstCourse;