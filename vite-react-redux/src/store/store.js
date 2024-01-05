import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../counter/counterSlice';
import postSlice from '../posts/postSlice';
export default configureStore({
    reducer:{
        counter: counterSlice,
        post: postSlice
    }
})