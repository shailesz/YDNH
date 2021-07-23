import { combineReducers } from "redux";
import storiesReducer from "./storiesReducer";
import itemReducer from "./itemReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  stories: storiesReducer,
  items: itemReducer,
  page: pageReducer,
});
