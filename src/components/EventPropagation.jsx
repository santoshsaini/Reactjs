export const EventPropagation = () => {
    const handleParentClick = () => {
        console.log("GrandParent Clicked");
    }

    const handleGrandParent = () => {
        console.log("Parent Clicked");
    }

    const handleChildClick = (event) => {
        console.log(event);
        console.log("Child Clicked");
        // event.stopPropagation(); // Prevents the event from bubbling up to the parent elements
    };

    return (
        <section>
            <div className="g-div" onClick={handleGrandParent} style={{ backgroundColor: "red", padding: "20px" }}>
                <div className="p-div" onClick={handleParentClick} style={{ backgroundColor: "blue", padding: "20px" }}>
                    <button className="c-div" onClick={handleChildClick}>Click Me</button>
                </div>
            </div>
        </section>

    )
}