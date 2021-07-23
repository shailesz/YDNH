const itemReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default itemReducer;
