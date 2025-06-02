
 export const NetflixSeriex = () => {
  const name = "This is testing";
  const rating = "8";
  const summary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  }

  const age = 20;

  let canWatch = "Not Available";
  if (age >> 18) canWatch = "Watch Now";
  

  // if(age < 18) {
  //   return(
  //       <div>
  //       <img src='hotel.jpg' width="40%" height="40%" />
  //       <h1>Hello, {name}</h1>
  //       <h2>Rating: {5+3}</h2>
  //       <p>{summary}</p>
  //       <p>Genre: {returnGenre()}</p>
  //       <button>Not Available</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <img src='hotel.jpg' width="40%" height="40%" />
      <h1>Hello, {name}</h1>
      <h2>Rating: {5+3}</h2>
      <p>{summary}</p>
      <p>Genre: {returnGenre()}</p>
      {/* <button>{age >> 18 ? "watch now" : "not available"}</button> */}
      <button>{canWatch}</button>
    </div>
  );
};


// export default NetflixSeriex;

export const Header = () => {
    return <p>Header Menu</p>;
}

export const Footer = () => {
    return <p>copyright @ santosh</p>;
}