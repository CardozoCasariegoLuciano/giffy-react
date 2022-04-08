import {APIkey, URI} from "./settings";

export const getGifs = ({keyword = "morty", limit = 10, page = 0, rating = "g"} = {}) => {

  const API = `${URI}/gifs/search?api_key=${APIkey}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=${rating}&lang=en`;

  return fetch(API)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const {images, id, title} = image
        const {url} = images.downsized_medium
        return {id, title, url}
      }) 
      return gifs
    });
};
