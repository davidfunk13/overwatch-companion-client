import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice'
import menuReducer from '../redux/menu/menuSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        menu: menuReducer,
    },
});
