import {applyMiddleware, combineReducer, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
const rootReducer = combineReducer({

})

const composedEnhancer =
 (typeof window !== "undefined" &&
         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
            compose;

const enhancer = composedEnhancer(applyMiddleware(thunk))
export const store = createStore(rootReducer, enhancer)