import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import movieSlice from "../features/movieSlice";
import heroSlice from "../features/heroSlice";
const appStore = configureStore({
    reducer: {
        user: userSlice,
        movie:movieSlice,
        hero:heroSlice,
    }
})

export default appStore;