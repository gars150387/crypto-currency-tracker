import { Platform } from "react-native";
import {createStore, applyMiddleware, compose} from 'redux'
import devTools from 'remote-redux-devTools'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import RootReduce from './Reducer'

const middleware = applyMiddleware(promise, thunk)

const Store = createStore(
    RootReduce,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostmane: 'localhost',
            port: 5678
        })
    )
)

export default Store;