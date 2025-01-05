import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import movieSlice from "../features/movieSlice";
import heroSlice from "../features/heroSlice";
const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies:movieSlice,
        hero:heroSlice,
    }
})

export default appStore;