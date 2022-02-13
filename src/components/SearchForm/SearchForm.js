import React, { useState } from "react";
import "./searchForm.css";

const SearchForm = ({onSubmit}) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword)
  };

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input placeholder="Search a gif" type="text" onChange={handleChange} value={keyword} />
      </form>
    </div>
  );
};

export default React.memo(SearchForm);
