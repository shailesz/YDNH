import hackernews from "../apis/hackernews";

export const fetchStoriesThenItems = () => async (dispatch, getState) => {
  await dispatch(fetchStories());

  getState().stories.forEach((storyId) => {
    dispatch(fetchItem(storyId));
  });
};

export const fetchStories = () => async (dispatch) => {
  const response = await hackernews.get("/newstories.json");

  dispatch({ type: "FETCH_STORIES", payload: response.data });
};

export const fetchItem = (id) => async (dispatch) => {
  const response = await hackernews.get(`/item/${id}.json`);

  dispatch({ type: "FETCH_ITEM", payload: response.data });
};

export const selectPage = (number) => (dispatch) => {
  dispatch({ type: "SELECT_PAGE", payload: number });
};
