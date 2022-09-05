import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    controlModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { controlModal } = modalSlice.actions;
export default modalSlice.reducer;
