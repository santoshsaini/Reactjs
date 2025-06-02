import React, { useState } from 'react';
export const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {
        setCount(count + step);
    };

    const handleDecrement = () => {
        setCount(count - step);
    };

    const handleReset = () => {
        setCount(0)
    };
 
    return (
        <div className="container text-center">
            <h1>Counter Example</h1>
            <h2>{count}</h2>
            <div className='d-flex'><input type='number' value={step} onChange={(e) => setStep(Number(e.target.value))} className='form-control mb-4' /></div>

            <button className="btn btn-primary mx-2" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-secondary mx-2" onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
            <button className="btn btn-success mx-2" onClick={handleReset}>Reset</button>

            <p>step: {step}</p>
        </div>
    );
}