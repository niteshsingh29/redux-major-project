import {configureStore} from '@reduxjs/toolkit'
import userReducer from './StateManagement/reducer1'

const store = configureStore({
    reducer: {

        students : userReducer,
    }
}) 
export default store;