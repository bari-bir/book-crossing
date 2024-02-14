import { configureStore } from "@reduxjs/toolkit"
import tabbarReducer from "./features/tabbarSlice"
const store = configureStore({
    reducer: {
        tabbar: tabbarReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
