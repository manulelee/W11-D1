import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourites";
import jobsReducer from "../reducers/jobs";

const combinedReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
