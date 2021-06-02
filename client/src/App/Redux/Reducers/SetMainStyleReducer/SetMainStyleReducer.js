const SetMainStyleReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_MAIN_STYLE":
      return { ...action.payload };
    default:
      return state;
  }
};

export default SetMainStyleReducer;