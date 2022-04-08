import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import SearchForm from "../../components/SearchForm/SearchForm";
import Spiner from "../../components/Spiner/Spiner";
import TrendingSearches from "../../components/TrendingSearches/TrendingSearches";
import { useGifs } from "../../hooks/useGifs";
import "./home.css";
import {Helmet} from "react-helmet"

const Home = () => {
  const { isLoading, gifs } = useGifs();

  return (
    <div className="Home">
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
      <h2>Lastest gifs searched</h2>
      <div className="home_content">
        <div className="home-results">
          {isLoading ? <Spiner /> : <ListOfGifs gifs={gifs} />}
        </div>
        <div className="home-category">
          <TrendingSearches />
        </div>
      </div>
    </div>
  );
};

export default Home;
