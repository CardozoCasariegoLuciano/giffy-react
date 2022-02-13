import React, { useCallback, useEffect, useRef } from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import Spiner from "../Spiner/Spiner";
import debounce from "just-debounce-it";
import "./searchGifs.css";
import { useNearScreen } from "../../hooks/useNearScreen";

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

  return (
    <div className="SearchGifs">
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
