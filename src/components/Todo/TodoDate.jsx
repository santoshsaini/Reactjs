import { useEffect, useState } from "react";

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("");
    // Todo date and time
        useEffect (() => { 
        const intervel = setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime (`${formattedDate} - ${formattedTime}`);
    }, 1000);
    
    return () => clearInterval(intervel);

    }, []);

    return (
        <div className="date-time h5">{dateTime}</div>
    );
}