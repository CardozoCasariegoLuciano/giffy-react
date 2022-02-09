import React, { useState } from "react";

export const GifsContext = React.createContext({});

export const GifContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <GifsContext.Provider value={{ gifs, setGifs }}>{children}</GifsContext.Provider>
  );
};


