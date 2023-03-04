const redux = require('redux');

// actions
// action-type
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
const addSubscriber = () => {
    return {
        type : ADD_SUBSCRIBER
    }
    
}


// reducers
const initialState = {
    subscribers : 365
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_SUBSCRIBER :
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
            default : return state;
    }
}

// store

// subscribe - view - dispatch