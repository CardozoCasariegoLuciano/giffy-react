import React from "react";
import { Link } from "wouter";
import "./category.css";

const Category = ({ title, options = [] }) => {
  return (
    <div className="Category">
      <h4>{title}</h4>
      <div className="Category_links">
        {options.map((value, index) => (
          <Link className="Category_link" key={index} to={`/search/${value}`}>
            {value}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
