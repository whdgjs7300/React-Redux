import { createStore } from "redux";
import {createAction} from '@reduxjs/toolkit';

// 리덕스 툴킷에서 액션타입 정의
const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE");


const reducer = (state= [], action) => {
    switch(action.type) {
        case addToDo: 
        return [{
            text : action.text,
            id : Date.now() 
        }, ...state];
        case deleteToDo : 
        return state.filter(toDo => toDo !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe()

export default store;