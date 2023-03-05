import { createStore } from "redux";
import subscribersReducer from "./reducer";

const store1 = createStore(subscribersReducer);

export default store1;