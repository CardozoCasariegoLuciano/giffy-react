import React, {useCallback } from "react";
import { useLocation} from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import SearchForm from "../../components/SearchForm/SearchForm";
import Spiner from "../../components/Spiner/Spiner";
import TrendingSearches from "../../components/TrendingSearches/TrendingSearches";
import { useGifs } from "../../hooks/useGifs";
import "./home.css";

const Home = () => {
  const { isLoading, gifs } = useGifs();
  const [location, setLocation] = useLocation();

  const handleSubmit = useCallback((keyword) => {
    setLocation(`/search/${keyword}`)
  }, [])


  return (
    <div className="Home">
      <SearchForm onSubmit={handleSubmit} />
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
