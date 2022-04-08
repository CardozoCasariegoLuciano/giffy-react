import { useContext, useEffect, useState } from "react";
import { GifsContext } from "../context/GifContext";
import { getGifs } from "../services/getGifs";

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword, rating } = {}) => {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [isLoading, setisloading] = useState(false);
  const [isLoadingNextPage, setisloadingNextPage] = useState(false);

  const keywordToUse =
    keyword || localStorage.getItem("lastkeyword") || "random";

  const ratingToUse =
    rating || localStorage.getItem("lastRating") || "g";

  useEffect(() => {
    setisloading(true);
    getGifs({ keyword: keywordToUse, rating: ratingToUse }).then((gifs) => {
      setGifs(gifs);
      setisloading(false);
      keyword && localStorage.setItem("lastkeyword", keyword);
      rating && localStorage.setItem("lastRating", rating);
    });
  }, [keyword, keywordToUse, rating, ratingToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setisloadingNextPage(true);
    getGifs({ keyword: keywordToUse, page, rating: ratingToUse }).then((nextGifs) => {
      setGifs((prev) => prev.concat(nextGifs));
      setisloadingNextPage(false);
    });
  }, [page, keywordToUse]);

  return { isLoading, isLoadingNextPage, gifs, setPage };
};
