import React, { useState } from 'react';
export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        console.log("Inner", count);
    }
    console.log("Outer", count);

    return (
        <div className="container text-center">
            <h1>Counter Example</h1>
            <h2>{count}</h2>
            <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-secondary mx-2" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="btn btn-success mx-2" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}