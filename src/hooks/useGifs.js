import {useContext, useEffect, useState} from "react";
import {GifsContext} from "../context/GifContext";
import {getGifs} from "../services/getGifs";

export const useGifs = ({keyword} = {keyword: null}) => {

  const { gifs, setGifs } = useContext(GifsContext)
  const [isLoading, setisloading] = useState(false);

  useEffect(() => {
    setisloading(true);
    const keywordToUse = keyword || localStorage.getItem("lastkeyword") || "random"
    getGifs({ keyword: keywordToUse })
      .then((gifs) => {
        setGifs(gifs)
        setisloading(false)
        localStorage.setItem("lastkeyword", keyword)
      })
  }, [keyword]);

  return {isLoading, gifs}
}
