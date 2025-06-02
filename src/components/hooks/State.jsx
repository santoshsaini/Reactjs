import {useState} from 'react';

export const State = () => {
    let value = 0;
    
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // };

    // let array = useState();
    const [count, setCount] = useState(0);
    console.log("Parent component rendered");
    // console.log(count);
    const handleButtonClick = () => {
        // value++;
        // console.log(value);
        // setCount(value);
        // setCount(count + 1);
        setCount(() => count + 1);
    };
    
    return (
        <div className='text-center'>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={handleButtonClick}>Click Me</button>
            <ChildComponent count={count} />
        </div>
    );
}

function ChildComponent({count}) {
    console.log("Child component rendered");
    return (
        <div>
            <h2>This is a child component - {count}</h2>
        </div>
    );
}