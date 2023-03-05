// store 합침
import { combineReducers } from "redux";
// subscriber reducer
import reducer from './reducer';
import viewsReducer from "./views/reducer";

const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers : reducer
})

export default rootReducer