import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from './reducer';
import { postReducer } from './postImage/PostReducer';
import { LoggedUserReducer } from './loggedUser/LoggedUserReducer';
const rootReducer = combineReducers({
    home: homeReducer,
    post: postReducer,
    user: LoggedUserReducer
})

const composedEnhancer =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const enhancer = composedEnhancer(applyMiddleware(thunk))
export const store = createStore(rootReducer, enhancer)
