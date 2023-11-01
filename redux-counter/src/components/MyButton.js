import React from 'react';
import { useDispatch } from 'react-redux';
import increment from '../action/index';

const MyButton = () => {
    let dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(increment(1))}>Counter</button>
    );
}

export default MyButton;