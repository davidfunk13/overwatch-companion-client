import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice'
import drawerReducer from '../components/ui/Drawer/drawerSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        drawer: drawerReducer,
    },
});
