import { SET_JOBS } from "../actions";

const initialState = {
  jobs: {
    content: [],
  },
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: {
          content: [action.payload],
        },
      };
    default:
      return state;
  }
};

export default jobsReducer;
