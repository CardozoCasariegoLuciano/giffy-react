import React from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import Spiner from "../Spiner/Spiner";
import "./searchGifs.css"

const SearchGifs = ({ params }) => {
  const { keyword } = params;
  const { isLoading, gifs } = useGifs({ keyword });

  return (
    <div className="ComponentName">
      {isLoading ? (
        <div className="spiner_conteiner">
          <Spiner />
        </div>
      ) : (
        <ListOfGifs gifs={gifs} keyword={keyword} />
      )}
    </div>
  );
};

export default SearchGifs;
