import React from "react";
import "./searchForm.css";
import { useLocation } from "wouter";
import { useForm } from "./hook";

const SearchForm = ({ initialKeyword, initialRating } = {}) => {
  const [_, setLocation] = useLocation();
  const { keyword, rating, updateKeyword, updateRating, RATINGS } = useForm({
    initialRating,
    initialKeyword,
  });

  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handleRatingChange = (e) => {
    updateRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "") {
      setLocation(`/search/${keyword}/${rating}`);
    }
  };

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          placeholder="Search a gif"
          type="text"
          onChange={handleChange}
          value={keyword}
        />
        <select
          onChange={handleRatingChange}
          value={rating}
          className="ratingSelect"
        >
          <option disabled>Rating type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default React.memo(SearchForm);
