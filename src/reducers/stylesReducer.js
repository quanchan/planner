import {ACTION_TYPES} from "actions/stylesAction";

const initialState = {
  theme: "dark",
  loading: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state;
  }
}