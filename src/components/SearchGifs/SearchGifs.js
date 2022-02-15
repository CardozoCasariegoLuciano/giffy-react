import React, { useCallback, useEffect, useRef } from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import Spiner from "../Spiner/Spiner";
import debounce from "just-debounce-it";
import "./searchGifs.css";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Helmet } from "react-helmet";

const SearchGifs = ({ params }) => {
  const ref = useRef();
  const { keyword } = params;
  const { isLoading, gifs, setPage } = useGifs({ keyword });

  const { isNearScreen } = useNearScreen({
    distance: "200px",
    externalRef: isLoading ? null : ref,
    once: false,
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const debounceHandleNextPage = useCallback(
    debounce(() => handleNextPage(), 500),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  const title = gifs
    ? `${gifs.length} resultados de ${decodeURI(keyword)}`
    : ``;

  return (
    <div className="SearchGifs">
      <Helmet>
        <title>{title} </title>
        <meta name="description" content={title}></meta>
      </Helmet>

      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <ListOfGifs gifs={gifs} keyword={keyword} />
          <div id="visor" ref={ref}></div>
        </>
      )}
      {/* <button className="BTN_nxtPage" onClick={handleNextPage}>Next page</button>*/}
    </div>
  );
};

export default SearchGifs;
