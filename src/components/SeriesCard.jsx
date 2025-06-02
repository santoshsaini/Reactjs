import styled from "styled-components";

export const SeriesCard = (props) => { 
    // console.log(props);
    const {id, img_url, name, rating, description, genre, cast, watch_url} = props.curElem;

    const ButtonThapa = styled.button({
        padding: "1rem 2rem",
        border:"none",
        fontSize:"1.2rem",
        backgroundColor:`{rating >> 8 ? "green" : "red"}`,
    });

    const ButtonThapas = styled.button`
        padding: 1rem 2rem
        border: none
        fontSize: 1.2rem
        backgroundColor: ${(props) => props.rating >> 8 ? "green" : "red"}
    `

    const ratingClass = rating > 9 ? "bg-primary rounded px-2 text-white" : "bg-success rounded px-2 text-white";
    
    return (
        <li className="col-md-4 list-unstyled" key={props.key}>
            <div className="card mb-4 shadow-sm">
                <img src={img_url} className="img-fluid" title={name} alt={name} />
                <div className="p-4">
                    <h1 className="h3">{name}</h1>
                    <h2 className="h5">Rating: <span className={ `rating, ${ratingClass}`}>
                        {rating}
                    </span></h2>
                    <p className="text-2xl text-cyan-800">Summary: {description}</p>
                    <p>Genre: {genre}</p>
                    <p>Cast: {cast}</p>
                    {/* <a href={watch_url} className="btn btn-primary mb-3" target="_blank">
                        Watch Now
                    </a> */}
                    <a href={watch_url} className="btn btn-primary mb-3" target="_blank">
                       <ButtonThapas rating="rating"> Watch Now</ButtonThapas>
                    </a>
                </div>
            </div>
        </li>
    )
}