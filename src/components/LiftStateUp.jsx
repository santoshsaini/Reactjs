import { useState } from 'react';

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <InputComponent inputValue = {inputValue} setInputValue = {setInputValue} />
            <DisplayComponent inputValue = {inputValue} />
        </>
    )
}

const InputComponent = ({inputValue, setInputValue}) => {
    return (
        <div>
            <h2>Input Component</h2>
            <input type="text" className='form-control' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    );
}

const DisplayComponent = ({inputValue}) => {
    // const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <h2>Display Component</h2>
            <p>Input Value: {inputValue}</p>
        </div>
    );
}