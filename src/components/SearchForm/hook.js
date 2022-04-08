import { useReducer } from "react";

const RATINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_ranting",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return { ...state, keyword: action.payload };

    case ACTIONS.UPDATE_RATING:
      return { ...state, rating: action.payload };

    default:
      return state;
  }
};



export const useForm = ({ initialRating, initialKeyword } = {}) => {
  const initialState = {
    keyword: initialKeyword ? decodeURI(initialKeyword) : "",
    rating: initialRating ? initialRating : RATINGS[0],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { keyword, rating } = state;

  const updateKeyword = (keyword) =>
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword });

  const updateRating = (rating) =>
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating });

  return {
    keyword,
    rating,
    updateKeyword,
    updateRating,
    RATINGS,
  };
};
