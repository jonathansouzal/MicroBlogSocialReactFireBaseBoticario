import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReduce'
import postsReducer from './reducers/postReduce'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig