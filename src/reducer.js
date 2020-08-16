export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return {
        ...state,
        user: action.user,
      };
    case "LOG_OUT_USER":
      return initialState
    default:
      return state;
  }
};

export default reducer;
