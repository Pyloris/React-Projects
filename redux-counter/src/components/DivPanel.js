import React from 'react';
import { useSelector } from 'react-redux';

const DivPanel = () => {
    let counterVal = useSelector(state => state.counter);

    return (
        <>
        The value of counter is {counterVal}
        </>
    );
}

export default DivPanel;