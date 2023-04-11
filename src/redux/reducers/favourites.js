import { ADD_FAVOURITES, REMOVE_FAVOURITES } from "../actions";

const initialState = {
  favourites: {
    content: [],
  },
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: {
          content: [...state.favourites.content, action.payload],
        },
      };

    case REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: {
          content: [
            ...state.favourites.content.slice(0, action.payload),
            ...state.favourites.content.slice(action.payload + 1),
          ],
        },
      };

    default:
      return state;
  }
};

export default favouriteReducer;
