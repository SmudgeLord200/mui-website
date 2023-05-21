import { configureStore } from '@reduxjs/toolkit'
import detailsReducer from './details';
import aboutReducer from './about';

export const store = configureStore({
    //import reducers
    reducer: {
        details: detailsReducer,
        about: aboutReducer,
    },
});