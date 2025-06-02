import "./EV.css";

export const EventHandling = () => {
    // function handleButtonClick() {
    //     alert("Button clicked!");
    //     // console.log("Button clicked!");
    // }

    const handleButtonClick = (event) => {
        alert("Button clicked!");
        console.log("Button clicked!");
        console.log(event);
        console.log(event.target);
        console.log(event.target.innerText);
        console.log(event.currentTarget);
        console.log(event.currentTarget.innerText);
        alert("Button clicked!");
    }

    const handleWelcomeUser = (name) => {
        // alert(`Welcome ${name} to React!`);
         console.log(`Welcome ${name} to React!`);
    }

    return (
        <div>
            <button onClick={handleButtonClick} className="border">click me</button>
            <button onClick={() => handleButtonClick()} className="border">click me</button>
            <button onClick={(event) => console.log(event)} className="border">click me</button>
            <button onClick={(event) => alert("Hey this is click")} className="border">click me</button>
            <button onClick={() => handleWelcomeUser("vinod")} className="border">click me</button>
            <button onClick={() => handleWelcomeUser("ram")} className="border">click me</button>
        </div>
    )
}