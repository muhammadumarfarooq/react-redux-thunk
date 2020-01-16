export default (state = null, action) => {
  if (action.type === "FETCH_USER") return action.payload;

  return state;
};
