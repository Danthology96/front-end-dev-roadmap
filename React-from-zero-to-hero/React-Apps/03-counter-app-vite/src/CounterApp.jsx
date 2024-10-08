import { useState } from 'react';
import PropTypes from 'prop-types';

// const getResult = (a, b) => { return a + b; }


export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);
    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }
    const handleSubstract = () =>
        setCounter((c) => c - 1);

    const handleReset = () =>
        setCounter(value);


    return (
        <>
            <h1>
                Counter App
            </h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};
