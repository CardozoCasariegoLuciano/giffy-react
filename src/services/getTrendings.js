import {APIkey, URI} from "./settings";

export const getTrendings = () => {

  const API = `${URI}/trending/searches?api_key=${APIkey}`;

  return fetch(API)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data
    });
};
