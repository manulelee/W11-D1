export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_JOBS = "SET_JOBS";

export const addFavourites = (company_name) => {
  return {
    type: ADD_FAVOURITES,
    payload: company_name,
  };
};

export const removeFavourites = (i) => {
  return {
    type: REMOVE_FAVOURITES,
    payload: i,
  };
};

export const setJobs = (payload) => {
  return {
    type: SET_JOBS,
    payload,
  };
};

export const fetchJobs = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log("FETCH ESEGUITA:", data);
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
