import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import movieSlice from "../features/movieSlice";
import heroSlice from "../features/heroSlice";
import tvShowsSlice from "../features/tvShowsSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies:movieSlice,
        hero:heroSlice,
        tvShows:tvShowsSlice,
    }
})

export default appStore;