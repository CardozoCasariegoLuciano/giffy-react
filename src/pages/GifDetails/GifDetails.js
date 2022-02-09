import React, {useContext} from "react";
import Gif from "../../components/Gif/Gif";
import {GifsContext} from "../../context/GifContext";
import "./gifDetails.css";

const GifDetails = ({ params }) => {
  const { id } = params;
  const {gifs} = useContext(GifsContext)


  const getGif = gifs.find(aGif => aGif.id === id)
  

  return (
    <div className="GifDetails">
      <h3>Gif:</h3>
      <Gif gif={getGif}/>
    </div>
  );
};

export default GifDetails;
