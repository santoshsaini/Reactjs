export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = (user) => {
        alert(`Hey thanks for hovering me`)
    };

    return (
        <>
        <WelcomeUser onClick={() => HandleWelcomeUser("Vinod")} onMouseEnter={handleHover} />  
        </>
    );
};

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting = () =>{
        console.log(`Her User, Welcome`);
        props.onClick();
    }
    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Click</button>
            <button onClick={handleGreeting}>Click</button>
        </>
    )
};