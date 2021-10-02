import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from './reducer';
import { postReducer } from './postImage/PostReducer';
import { LoggedUserReducer } from './loggedUser/LoggedUserReducer';
import { AllPostReducer } from './AllPosts/AllPostsReducer';
const rootReducer = combineReducers({
    user: LoggedUserReducer,
    homeReducer: homeReducer,
    postReducer: postReducer,
    posts: AllPostReducer

})

const composedEnhancer =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const enhancer = composedEnhancer(applyMiddleware(thunk))
export const store = createStore(rootReducer, enhancer)
