import { createStore } from "redux";
// 리듀서 파일의 내용을 합침 
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;