import { useState, useEffect } from "react";
import { useGifs } from "./useGifs";
import getSingleGif from "../services/getSingleGif";

const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifCache = gifs.find((aGif) => aGif.id === id);

  const [gif, setGif] = useState(gifCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ id })
        .then((aGif) => {
          setGif(aGif)
          setIsError(false)
          setIsLoading(false)
        }).catch((err) => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [id, gif]);

  return { gif, isError, isLoading };
};

export default useSingleGif;
