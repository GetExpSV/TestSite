import React, {useEffect, useRef} from 'react';
import '../App.css'

const FillLine = (props) => {
    const fillLineRef = useRef('fillLine');
    const {earned} = props;
    useEffect(()=>{
        fillLineRef.current.style.width = earned / 10000 + '%'
    });
    return (
        <div className="main-screen__last-line-container-line">
            <div className="main-screen__last-line-container-line-fill" id='line' ref={fillLineRef}></div>
        </div>
    );
};

export default FillLine;