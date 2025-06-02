import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

export const NetflixSeriex = () => {
  return (
    <ul className="row">
        {
            seriesData.map((curElem) => {
             return (
                <SeriesCard key={curElem.id} curElem = {curElem} />
             )
            })
        }
    </ul>
  );
};
