import { combineReducers } from "redux";
import aTest from "./reducers/aTest/aTestReducer";
import players from "./reducers/players/playersReducer";

export default combineReducers({
  players,
  aTest,
});