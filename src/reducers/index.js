import { combineReducers } from "redux";
import mock from "./mockReducer"
import styles from "./stylesReducer";
const rootReducer = combineReducers(
  {
    mock,
    styles

  }
)

export default rootReducer;