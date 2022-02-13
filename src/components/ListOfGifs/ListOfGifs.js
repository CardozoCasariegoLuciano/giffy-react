import React from "react";
import { Link } from "wouter";
import Gif from "../Gif/Gif";
import "./listOfGifs.css";

const ListOfGifs = ({ gifs, keyword }) => {
  return (
    <div className="listOfGifs">
      {keyword && (
        <>
          <h3>{decodeURI(keyword)}'s gifs</h3>
          <Link to="/" className="goHomeLink">
            Go Home
          </Link>
        </>
      )}
      <div className="gifs-conteiner">
        {gifs && gifs.map((gif, indx) => (
          <Gif key={gif.id + indx} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default ListOfGifs;
