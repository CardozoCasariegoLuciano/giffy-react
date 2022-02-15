import { APIkey, URI } from "./settings";

const getSingleGif = ({ id }) => {
  const API = `${URI}/gifs/${id}?api_key=${APIkey}`;
  return fetch(API)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const { images, id, title } = data;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });
};

export default getSingleGif;
