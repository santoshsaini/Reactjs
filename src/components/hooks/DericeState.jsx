

import { useState } from "react";

export const DriveState = () => {
    const [user, setUser] = useState([
    {name: "John Doe", age: 30},
    {name: "Jane Smith", age: 25},
    {name: "Alice Johnson", age: 28},
    {name: "Bob Brown", age: 35},
    {name: "Charlie Davis", age: 22},
    {name: "Diana Prince", age: 27},  
    ]);

    // // Derived state: count of users
    // console.log(user);
    // const userCount = user.length;
    // // Derived state: average age of users
    // const averageAge =
    // user.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

    console.log(user);
    const userCount = user.length;

    return (
    <div>
        <h1>User List</h1>
        <ul className="px-0">
            {user.map((curElem, index) => {
                return (
                <li key={index}>
                    {curElem.name} - {curElem.age} years old
                </li>
                );
            })}
        </ul>
        <p>Total User: {userCount}</p>
        <p>Average Age: {user.reduce((accum, curElem) => accum + curElem.age, 0) / userCount}</p>
        <button className="btn btn-primary mx-2"
            onClick={() => {
                setUser([
                ...user,
                { name: "New User", age: Math.floor(Math.random() * 50) + 1 },
                ]);
            }}
        >
            Add User
        </button>
        <button className="btn btn-primary mx-2"
            onClick={() => {
                setUser(user.filter((_, index) => index !== userCount - 1));
            }}
        >
            Remove Last User
        </button>
        <button className="btn btn-primary mx-2"
            onClick={() => {
                setUser(user.filter((_, index) => index !== 0));
            }}
        >
            Remove First User
        </button>
        <button className="btn btn-primary mx-2"
            onClick={() => {
                setUser(user.filter((_, index) => index !== Math.floor(userCount / 2)));
            }}  
        >
            Remove Middle User
        </button>
        <button className="btn btn-primary mx-2"
            onClick={() => {
                setUser(user.filter((_, index) => index !== Math.floor(Math.random() * userCount)));
            }}
        >
            Remove Random User
        </button>
    </div>
    );
}