import React from "react";
import {Link} from "wouter";
import "./gif.css"

const Gif = ({gif}) => {


  return (
    <div className="Gif">
     <Link to={`/gif/${gif.id}`} className='Gif-link'>
        <h4>{gif.title}</h4>
        <img loading="lazy" alt={gif.title} src={gif.url} />
      </Link>
    </div>
  );
};

export default Gif;
