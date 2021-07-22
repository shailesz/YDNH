const postreducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_STORIES":
      return action.payload;
    default:
      return state;
  }
};

export default postreducer;
