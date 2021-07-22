import hackernews from "../apis/hackernews";

export const fetchStories = () => async (dispatch) => {
  const response = await hackernews.get("/newstories.json");

  dispatch({ type: "FETCH_STORIES", payload: response.data });
};
