import {configureStore} from '@reduxjs/toolkit'
import userReducer from './StateManagement/reducer1'
import StudentReducer from './StateManagement/reducer2'

const store = configureStore({
    reducer: {

        students : userReducer,
        StudentMarks: StudentReducer,
    }
}) 
export default store;