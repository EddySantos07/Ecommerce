const CurrentMainStyleAction = (style) => {
  return {
    type: "CHANGE_MAIN_CURRENT_STYLE_OVERVIEW",
    payload: style,
  };
};

export default CurrentMainStyleAction;
