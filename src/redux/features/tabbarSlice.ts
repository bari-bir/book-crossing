import { createSlice } from "@reduxjs/toolkit"

export const tabbarSlice = createSlice({
    name: "modal",
    initialState: {
        isVisible: false,
    },
    reducers: {
        toggleTabbar: (state) => {
            state.isVisible = !state.isVisible
        },
    },
})

export const { toggleTabbar } = tabbarSlice.actions

export default tabbarSlice.reducer
