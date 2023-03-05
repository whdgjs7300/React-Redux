import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./type";


// 사용할 액션 타입 정의
const addSubscriber = () => {
    return {
        type : ADD_SUBSCRIBER
    }

}

const removeSubscriber = () => {
    return {
        type : REMOVE_SUBSCRIBER
    }
}
