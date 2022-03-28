import {configureStore} from '@reduxjs/toolkit'
import userReducer from './StateManagement/reducer1'
import StudentReducer from './StateManagement/reducer2'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {persistReducer } from 'redux-persist'


const reducers = combineReducers({
        students: userReducer,
        StudentMarks: StudentReducer,

})
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
})
export default store;