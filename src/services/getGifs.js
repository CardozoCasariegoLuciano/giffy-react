const APIkey = "UcQag4cVl5a9WTkRs3hMN1gi0SRhJoxR"

export const getGifs = ({keyword = "morty"} = {}) => {

  const API = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${keyword}&offset=5&rating=r&lang=en`;

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
