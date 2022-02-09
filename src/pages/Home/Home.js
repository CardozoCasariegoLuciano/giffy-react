import React, {useState} from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import {useGifs} from "../../hooks/useGifs";
import "./home.css";

const Home = () => {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useLocation()
  const {isLoading, gifs} = useGifs()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(`/search/${keyword}`)  
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }


  return (
    <div className="Home">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={keyword}/>
          <button type="submit">Search</button>
        </form>
        <h2>Lastest gifs</h2>
      <div className="home_content">
        <ListOfGifs gifs={gifs}/>
      </div>
    </div>
  );
};

export default Home;
