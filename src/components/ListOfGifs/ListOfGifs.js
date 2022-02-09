import React from "react";
import { Link } from "wouter";
import Gif from "../Gif/Gif";
import "./listOfGifs.css";

const ListOfGifs = ({ gifs, keyword }) => {
  return (
    <div className="listOfGifs">
      {keyword && (
        <>
          {" "}
          <h3>{keyword}'s gifs</h3>
          <Link to="/" className="goHomeLink">
            Go Home
          </Link>
        </>
      )}
      <div className="gifs-conteiner">
        {gifs.map((gif) => (
          <Gif key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default ListOfGifs;
