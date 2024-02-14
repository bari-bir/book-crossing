import { createSlice } from "@reduxjs/toolkit"

export const tabbarSlice = createSlice({
    name: "modal",
    initialState: {
        isVisible: true,
    },
    reducers: {
        toggleTabbar: (state) => {
            state.isVisible = !state.isVisible
        },
        hideTabbar: (state) => {
            state.isVisible = false
        },
        showTabbar: (state) => {
            state.isVisible = true
        },
    },
})

export const { toggleTabbar, hideTabbar, showTabbar } = tabbarSlice.actions

export default tabbarSlice.reducer
