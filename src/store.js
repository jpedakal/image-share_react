import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({});

const intialsState= {}

const middleware = [thunk]

const store = createStore(reducer, intialsState, composeWithDevTools
    (applyMiddleware(...middleware))
    )

    export default store
