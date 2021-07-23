const pageReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_PAGE":
      return action.payload;

    default:
      return state;
  }
};

export default pageReducer;
