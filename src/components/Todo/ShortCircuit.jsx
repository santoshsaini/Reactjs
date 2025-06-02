import React, { useState } from 'react';

const ShortCircuitExample = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [user, setUser] = useState("");

    return (
        <section className="container short-container">
            <div className="text-center">
                <h1>Welcome to the ShortCircuit Evaluation!</h1>
                {isLoggedIn && <p>Your are logged in!</p>}
                <p>{user ? `Hello, ${user}!` : "You are logged in!"}</p>
            </div>
            <div className="grid-three-cols text-center">
                <button className="btn btn-primary mx-2" onClick={() => setIsLoggedIn(!isLoggedIn)}>Togggle Login State</button>
                <button className="btn btn-secondary mx-2" onClick={() => setUser("Santosh Kumar")}>Set User</button>
                <button className="btn btn-success mx-2" onClick={() => setUser("")}>Clear User</button>
            </div>
        </section>
    );
};

export default ShortCircuitExample;