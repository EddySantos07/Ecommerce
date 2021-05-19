const OnMountSetCurrentStyleReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_STYLE_MOUNT":
      return { ...action.payload };
    default:
      return state;
  }
};

export default OnMountSetCurrentStyleReducer;